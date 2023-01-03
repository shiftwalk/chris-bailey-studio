import { FiFileText } from 'react-icons/fi'

export default {
  title: 'Text Block',
  type: 'object',
  name: 'textBlock',
  icon: FiFileText,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare(selection) {
      const {heading} = selection
      return {
        title: 'Text Block',
        subtitle: heading
      }
    }
  }
}