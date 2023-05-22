import {JsonFormsUISchemaRegistryEntry, JsonSchema} from '@jsonforms/core'

import {BASE_IRI} from '../config'
import {JSONSchema7} from "json-schema";
import {allDefinitions} from "./jsonforms/schemaUtils";


const labels: Record<string, string> = {
  Person: 'Person',
  Work: 'Werk',
  Organization: 'Organisation',
  Location: 'Ort',
  Resource: 'Ressource',
  ExhibitionType: 'Ausstellungsart',
  GeographicLocation: 'Geografischer Ort'
}
const createStubLayout = (defs: string, baseIRI: string, label?: string) => ({
  'type': 'VerticalLayout',
  'elements': [
    {
      'type': 'Control',
      'label': labels[defs] || label || defs,
      'options': {
        'inline': true,
        'context': {
          '$ref': `#/$defs/${defs}`,
          'typeIRI': `${baseIRI}${defs}`,
          'useModal': false
        }
      },
      'scope': '#/properties/@id'
    },
    {
      'type': 'Control',
      'scope': '#/properties/@type'
    }
  ]
})

const createUiSchema: (key: string, baseIRI: string, label?: string) => JsonFormsUISchemaRegistryEntry = (key, baseIRI,label) => ({
    tester: (schema) => {
      const rank = schema.properties?.['@type']?.const === `${baseIRI}${key}` ? 21 : -1
      return rank
    },
    uischema: createStubLayout(key, baseIRI, label)

})

export const uischemas: (schema: JsonSchema) => JsonFormsUISchemaRegistryEntry[] =
        schema => allDefinitions(schema as JSONSchema7).map((key) => createUiSchema(key, BASE_IRI))

