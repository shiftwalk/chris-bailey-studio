import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonBio from './singletonBio'
import singletonContact from './singletonContact'

// Documents
import work from './work'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import singleImageBlock from './common/singleImageBlock'
import doubleImageBlock from './common/doubleImageBlock'
import textBlock from './common/textBlock'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonBio,
    singletonContact,
    work,
    defaultImage,
    singleImageBlock,
    doubleImageBlock,
    textBlock,
    seo
  ]),
})
