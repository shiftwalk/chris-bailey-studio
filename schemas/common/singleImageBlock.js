import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Single Image',
  type: 'object',
  name: 'singleImageBlock',
  icon: FiCamera,
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      images: 'images'
    },
    prepare(selection) {
      const {images} = selection
      return {
        title: 'Single Image',
        media: images[0]
      }
    }
  }
}