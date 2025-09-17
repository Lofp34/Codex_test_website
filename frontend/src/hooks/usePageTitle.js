import { useEffect } from 'react'

export function usePageTitle(pageTitle) {
  useEffect(() => {
    if (!pageTitle) return
    document.title = `${pageTitle} | Laurent Serre Coaching`
  }, [pageTitle])
}
