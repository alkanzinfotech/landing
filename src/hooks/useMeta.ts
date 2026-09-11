import { useEffect } from 'react'

export function useMeta(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = `${title} • AlKanz Infotech`
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
