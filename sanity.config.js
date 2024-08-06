import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Skoda',

  projectId: '5abo01o1',
  dataset: 'skoda',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
