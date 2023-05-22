import {Bindings, Dataset, DatasetCore, Quad, ResultStream} from '@rdfjs/types'
import {ASK, CONSTRUCT, DELETE, INSERT} from '@tpluscode/sparql-builder'
import {JSONSchema7} from 'json-schema'
import jsonld from 'jsonld'
import N3 from 'n3'
import {useCallback, useMemo, useState} from 'react'

import {jsonSchemaGraphInfuser} from '../utils/graph/jsonSchemaGraphInfuser'
import {jsonSchema2construct} from '../utils/sparql'
import {CRUDOptions} from './types'

export const useSPARQL_CRUD = (entityIRI: string | undefined, typeIRI: string | undefined, schema: JSONSchema7,
                               {
                                 askFetch,
                                 constructFetch,
                                 defaultPrefix,
                                 updateFetch,
                                 setData,
                                 data,
                                 walkerOptions = {},
                                 queryBuildOptions,
                                 upsertByDefault
                               }: CRUDOptions) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const whereEntity = useMemo(() => entityIRI && `<${entityIRI} a <${typeIRI}> .`, [entityIRI, typeIRI])


  const exists = useCallback(async () => {
    if (!whereEntity) return false
    const query = ASK`${whereEntity}`.build(queryBuildOptions)
    try {
      return await askFetch(query)
    } catch (e) {
      console.log(e)
    }
    return false
  }, [whereEntity, setIsUpdate, defaultPrefix, askFetch])

  const load = useCallback(
      async () => {
        if (!entityIRI || !whereEntity) return
        const {
          construct,
          whereRequired,
          whereOptionals
        } = jsonSchema2construct(entityIRI, schema, [], ['@id', '@type'])
        let query = CONSTRUCT`${construct}`.WHERE`
                ${whereEntity}
                ${whereRequired}
                ${whereOptionals}
                `.build(queryBuildOptions)
        query = `PREFIX : <${defaultPrefix}> ` + query
        try {
          const ds = await constructFetch(query)
          const resultJSON = jsonSchemaGraphInfuser(defaultPrefix, entityIRI, ds as Dataset, schema, walkerOptions)
          setIsUpdate(true)
          setData(resultJSON)
        } catch (e) {
          console.log(e)
        }
      },
      [entityIRI, whereEntity, setData, setIsUpdate, defaultPrefix, constructFetch]
  )

  const remove = useCallback(
      async () => {
        if (!entityIRI || !whereEntity) return
        const {
          construct,
          whereRequired,
          whereOptionals
        } = jsonSchema2construct(entityIRI, schema, ['@id'], ['@id', '@type'])
        let query = DELETE` ${construct} `.WHERE`${whereEntity} ${whereRequired}\n${whereOptionals}`.build(queryBuildOptions)
        query = `PREFIX : <${defaultPrefix}> ` + query
        await updateFetch(query)
      },
      [entityIRI, whereEntity, defaultPrefix, updateFetch],
  )


  const save = useCallback(
      async () => {
        if (!data || !entityIRI || !whereEntity) return
        const _data = {
          ...data,
          '@id': entityIRI
        }
        const ntWriter = new N3.Writer({format: 'Turtle'})
        const ds = await jsonld.toRDF(_data)

        // @ts-ignore
        const ntriples = ntWriter.quadsToString([...ds]).replaceAll('_:_:', '_:')

        if (!isUpdate && !upsertByDefault) {
          const updateQuery = INSERT.DATA` ${ntriples} `
          const query = updateQuery.build()
          await updateFetch(query)
          setIsUpdate(true)
        } else {
          const {
            construct,
            whereRequired,
            whereOptionals
          } = jsonSchema2construct(entityIRI, schema, ['@id'], ['@id', '@type'])
          const queries = [
            DELETE` ${construct} `.WHERE`${whereEntity} ${whereRequired}\n${whereOptionals}`.build(queryBuildOptions),
            INSERT.DATA` ${ntriples} `.build(queryBuildOptions)
          ]
          for (let query of queries) {
            query = `PREFIX : <${defaultPrefix}> ` + query
            await updateFetch(query)
          }
        }
      },
      [entityIRI, whereEntity, data, isUpdate, setIsUpdate, defaultPrefix, updateFetch, upsertByDefault])

  return {
    exists,
    load,
    save,
    remove,
    isUpdate,
    setIsUpdate,
    // @ts-ignore
    ready: Boolean(askFetch && constructFetch && updateFetch)
  }
}


