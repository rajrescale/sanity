import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skoda',
  title: 'Skoda',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Landing Page Identifier',
      type: 'string',
      options: {
        list: [
          { title: 'Landing Page 1', value: 'landingPage1' },
          { title: 'Landing Page 2', value: 'landingPage2' },
          { title: 'Landing Page 3', value: 'landingPage3' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
      options: {
        list: [
          { title: 'Model 1', value: 'm1' },
          { title: 'Model 2', value: 'm2' },
          { title: 'Model 3', value: 'm3' },
        ],
        layout: 'dropdown',
      },
    }),
  ],
})