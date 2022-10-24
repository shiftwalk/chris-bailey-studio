export default {
  title: 'Bio',
  name: 'bio',
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
      title: 'Hero Image',
      name: 'heroImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Services',
      name: 'aboutServices',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Bio Text",
      name: "aboutText",
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },    
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
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