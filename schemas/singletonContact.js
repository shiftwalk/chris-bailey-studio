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
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'LinkedIn',
      name: 'linkedIn',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Booking Availability Override',
      name: 'bookingAvailabilityOverride',
      type: 'string',
      description: 'Filling this out will override the automated "BOOKING FOR Q3" message which will default to the current *next* quarter',
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