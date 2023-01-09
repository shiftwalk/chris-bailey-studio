import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import {
  FiHome,
  FiCamera,
  FiUser,
  FiPhone,
  FiDroplet,
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      // S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      // S.divider(),
      S.listItem().title('Bio').child(S.editor().id('bio').schemaType('bio').documentId('singleton-bio').views(getPreview('bio'))).icon(FiUser),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'work',
        title: 'Works',
        icon: FiCamera
      }),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('contact'))).icon(FiPhone),
      S.divider(),
      S.listItem().title('Colors').child(S.editor().id('colors').schemaType('colors').documentId('singleton-colors').views(getPreview('colors'))).icon(FiDroplet)
    ]);