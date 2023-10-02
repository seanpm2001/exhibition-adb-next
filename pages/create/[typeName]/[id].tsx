import {btoa} from 'buffer'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useCallback, useEffect, useMemo} from 'react'
import {v4 as uuidv4} from 'uuid'

import TypedForm from '../../../components/content/main/TypedForm'
import {sladb, slent} from '../../../components/form/formConfigs'
import {MainLayout} from '../../../components/layout/main-layout'
import {useFormData, useRDFDataSources} from '../../../components/state'
import findEntityByClass from '../../../components/utils/discover/findEntityByClass'
import {oxigraphCrudOptions} from '../../../components/utils/sparql/remoteOxigraph'

type Props = {
  children: React.ReactChild
  data: any
  classIRI: string
}

export async function getStaticPaths() {
  const pages = ['Exhibition', 'Person'].flatMap(async (typeName) => {
    const classIRI = sladb[typeName].value
    const allEntities = await findEntityByClass(null, classIRI, oxigraphCrudOptions('https://ausstellungsdatenbank.kuenste.live/query').selectFetch, 1000)
    return allEntities.map((entity: any) => {
      return {
        params: {typeName, id: btoa( entity.value) },
      }
    })
  })
  const paths = (await Promise.all(pages)).flat()
  console.log({paths: JSON.stringify(paths, null, 2)})
  return {paths: paths, fallback: false}
}

export async function getStaticProps({params}) {
  const typeName = params.typeName
  const id = params.id
  return {
    props: {
      typeName,
      id
    }
  }
}
export default () => {
  const {bulkLoaded} = useRDFDataSources('/ontology/exhibition-info.owl.ttl')
  const router = useRouter()
  const {typeName, id} = router.query as { typeName: string | null | undefined, id: string | null | undefined }
  //get query parm ?id=...
  const classIRI: string | undefined = typeof typeName === 'string' ? sladb(typeName).value : undefined

  const { setFormData} = useFormData()

  useEffect(() => {
    if (id && classIRI) {
      setFormData({
        '@id': id.startsWith('http') ? decodeURIComponent(id) : atob(id),
        '@type': classIRI
      })
    }
  }, [setFormData, id, classIRI])

  const handleNew = useCallback(() => {
    const newId = uuidv4()
    router.push(`/create/${typeName}/${newId}`)
  }, [classIRI])

  return (
      <>
        <Head>
          <title>Ausstellung bearbeiten - Ausstellungserfassung</title>
          <meta name="description" content="a knowledge base about exhibitions"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <MainLayout>
          {classIRI && typeName && <TypedForm typeName={typeName as string} classIRI={classIRI as string}/>}
        </MainLayout>
      </>
  )
}
