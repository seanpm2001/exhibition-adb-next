import 'react-json-view-lite/dist/index.css'

import {JsonFormsCore, rankWith, schemaMatches, scopeEndsWith} from '@jsonforms/core'
import {JsonFormsUISchemaRegistryEntry} from '@jsonforms/core/src/reducers/uischemas'
import {materialCells, materialRenderers} from '@jsonforms/material-renderers'
import {JsonForms} from '@jsonforms/react'
import datasetFactory from '@rdfjs/dataset'
import Parser from '@rdfjs/parser-jsonld'
import {Dataset} from '@rdfjs/types'
import {JSONSchema7} from 'json-schema'
import isEmpty from 'lodash/isEmpty'
import dsExt from 'rdf-dataset-ext'
import React, {FunctionComponent, useCallback, useEffect, useState} from 'react'
import {JsonView} from 'react-json-view-lite'
import stringToStream from 'string-to-stream'

import uischema from '../../schema/exhibition-form-ui-schema.json'
import schema from '../../schema/exhibition-info.schema.json'
import locationschema from '../../schema/exhibition-location-ui-schema.json'
import personschema from '../../schema/exhibition-person-ui-schema.json'
import AutocompleteURIFieldRenderer from '../renderer/AutocompleteURIFieldRenderer'
import AutoIdentifierRenderer from '../renderer/AutoIdentifierRenderer'
import MaterialCustomAnyOfRenderer, {materialCustomAnyOfControlTester} from '../renderer/MaterialCustomAnyOfRenderer'
import {jsonSchemaGraphInfuser} from '../utils/graph/jsonSchemaGraphInfuser'

export const exhibitionSchema = {...schema, ...schema.$defs.Exhibition}

interface OwnProps {
    data: any,
    setData: (data: any) => void
}

type Props = OwnProps;

const renderers = [
    ...materialRenderers,
    {
        tester: materialCustomAnyOfControlTester,
        renderer: MaterialCustomAnyOfRenderer
    }, {
        tester: rankWith(10,
            schemaMatches(
                schema =>
                    Boolean(!isEmpty(schema) &&
                        schema.format?.startsWith('wikidata'))
            )),
        renderer: AutocompleteURIFieldRenderer,
    }, {
        tester: rankWith(10,
            scopeEndsWith('@id')
        ),
        renderer: AutoIdentifierRenderer
    }
]

const uiSchemas: JsonFormsUISchemaRegistryEntry[] = [
    {
        tester: (schema, schemaPath, path) => {
            return schema.properties?.['@type']?.const === 'http://ontologies.slub-dresden.de/exhibiton#Person' ? 11 : -1
        },
        uischema: personschema
    }, {
        tester: (schema, schemaPath, path) => {
            return schema.properties?.['@type']?.const === 'http://ontologies.slub-dresden.de/exhibiton#Location' ? 11 : -1
        },
        uischema: locationschema
    }
]

const sladb = 'http://ontologies.slub-dresden.de/exhibition#'
const slent = 'http://ontologies.slub-dresden.de/exhibition/entities#'
const EditExhibitionJSONForm: FunctionComponent<Props> = ({data, setData}) => {
    const [jsonldData, setJsonldData] = useState<any>({})
    const [jsonFromGraph, setJsonFromGraph] = useState<any>({})
  const [entityIRI, setEntityIRI] = useState<string | undefined>()
  const handleFormChange = useCallback(
      (state: Pick<JsonFormsCore, 'data' | 'errors'>) => {
        setData(state.data)
        if (state.data['@id']) {
          setEntityIRI(state.data['@id'])
        }
        const jsonldDoc = {
          '@context': {
            '@vocab': sladb,
            'xsd': 'http://www.w3.org/2001/XMLSchema#',
            'birth_date': {
              '@type': 'xsd:date'
            },
            'death_date': {
              '@type': 'xsd:date'
            }
          },
          ...JSON.parse(JSON.stringify(state.data))
        }
        //jsonld.JsonLdProcessor.expand(jsonldDoc).then(res => {
        //  setJsonldData(res);
        //     }
        //  )
        //jsonld.toRDF(jsonldDoc).then(res => console.log(res))

        try {
          const jsonldStream = stringToStream(JSON.stringify(jsonldDoc))
          const parser = new Parser()
          const dsPromise = dsExt.fromStream(datasetFactory.dataset(), parser.import(jsonldStream))
          dsPromise.then(ds => {
            if (entityIRI) {
              const resultJSON = jsonSchemaGraphInfuser(sladb, entityIRI, ds as Dataset, exhibitionSchema as JSONSchema7, {
                omitEmptyArrays: true,
                omitEmptyObjects: true,
                maxRecursionEachRef: 3,
                maxRecursion: 5
              })
              setJsonFromGraph(resultJSON)
            }
          })
        } catch (e) {
          console.error('Cannot convert JSONLD to dataset', e)
        }

      }, [setData, setJsonldData, setEntityIRI, setJsonFromGraph])


  return (<>
        <JsonForms
            data={data}
            renderers={renderers}
            cells={materialCells}
            onChange={handleFormChange}
            schema={exhibitionSchema}
            uischema={uischema}
            uischemas={uiSchemas}

        />
        <JsonView data={data} shouldInitiallyExpand={(lvl) => lvl < 5}/>
        <hr/>
        <JsonView data={jsonldData} shouldInitiallyExpand={(lvl) => lvl < 5}/>
        <hr/>
        <JsonView data={jsonFromGraph} shouldInitiallyExpand={(lvl) => lvl < 5}/>
      </>
  )
}

export default EditExhibitionJSONForm
