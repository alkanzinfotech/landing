import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.alkanzinfotech.in'
const MAX_DESCRIPTION_LENGTH = 158

function truncateDescription(text: string) {
  if (text.length <= MAX_DESCRIPTION_LENGTH) return text
  const cut = text.slice(0, MAX_DESCRIPTION_LENGTH)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : MAX_DESCRIPTION_LENGTH)}…`
}

export function useMeta(title: string, rawDescription?: string) {
  const { pathname } = useLocation()
  const description = rawDescription ? truncateDescription(rawDescription) : undefined

  useEffect(() => {
    const fullTitle = `${title} • AlKanz Infotech`
    document.title = fullTitle

    const setMeta = (selector: string, attr: string, value: string, content: string) => {
      let tag = document.querySelector(selector)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, value)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    }

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)

    const canonicalHref = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalHref)

    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref)
  }, [title, description, pathname])
}
