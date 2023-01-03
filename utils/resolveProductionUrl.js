// All Slugs go here...
const globalSlugs = {
  work: '/work',
  bio: '/bio',
}

const secret = process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET
export const getGlobalSlug = (slug) => globalSlugs[slug]

// Change remote url...
const remoteURL = 'https://chris-bailey.vercel.app/'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`

  if (path.includes('/work')) {
    path = path.replace("/work", "")
  }

  return `${previewURL}/api/preview?secret=sk9JlgFfxwlX69lkfAnXJXzE88qbIpmliTjtGWLNrt3z4rlTB0RaruOfbUmkyjVn5BfOl1RyoiBAVVWUe3yknLX1otWmMf04LJJPtwjs4iVT8lcmQzvVvzLA08T805A2mnfbePKkZPauXHQLo13IKqDX87xrm4iUzuHcmfKU5CXxsxzxt3oE&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
