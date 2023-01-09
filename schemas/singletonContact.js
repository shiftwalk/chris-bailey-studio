export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Email Address',
      name: 'emailAddress',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'eg: "Instagram" or "Behance"',
            validation: Rule => Rule.required()
          },
          {
            title: 'URL',
            name: 'url',
            type: 'url',
            validation: Rule => Rule.required()
          }
        ],
      }],
    },
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