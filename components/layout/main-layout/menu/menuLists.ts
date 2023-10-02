import { Face as IconFaceId, FormatPaint as IconPaint,Theaters as IconDots  } from '@mui/icons-material'
import { JSONSchema7 } from 'json-schema'

import {MenuGroup} from './types'

const icons = { IconFaceId, IconPaint, IconDots }


const topLevel = ['Exhibition', 'Person']

const lists: (schema: JSONSchema7)  => MenuGroup = (exhibitionSchema) => ({
  id: 'lists',
  title: 'Abfrage',
  type: 'group',
  children: [
    {
      id: 'list_default',
      title: 'Austellungen',
      type: 'item',
      url: '/list/Exhibition'
    },
    {
      id: 'list_person',
      title: 'Personen',
      type: 'item',
      url: '/list/Person'
    },
    {
      id: 'list_other',
      title: 'Entitäten',
      type: 'collapse',
      //@ts-ignore
      icon: icons.IconDots,
      children: Object.entries(exhibitionSchema.definitions || exhibitionSchema['$defs'] || {})
        .filter(([key]) => !topLevel.includes(key))
        .map(([key, value]) => ({
          id: `list_${key}`,
          title: (value as any).title || key,
          type: 'item',
          url: `/list/${key}`
        }))
    }
  ]
})

export default lists