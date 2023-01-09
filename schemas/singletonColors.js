export default {
  title: 'Colors',
  name: 'colors',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bioBgColor',
      title: 'Bio Background Color',
      type: 'colorPicker'
    },
    {
      name: 'homeBgColor',
      title: 'Home Background Color',
      type: 'colorPicker'
    },
    {
      name: 'workBgColor',
      title: 'Work Background Color',
      type: 'colorPicker'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}