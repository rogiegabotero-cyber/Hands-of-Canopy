import { useEffect } from 'react'
import faviconSrc from '../assets/hoc-favicon.webp'
import { getTransparentMarkDataUrl } from './transparentLogo'

export function useFavicon() {
  useEffect(() => {
    getTransparentMarkDataUrl(faviconSrc, { maxXFraction: 1 })
      .then((dataUrl) => {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const img = new Image()
        img.onload = () => {
          const scale = Math.min(64 / img.naturalWidth, 64 / img.naturalHeight)
          const w = img.naturalWidth * scale
          const h = img.naturalHeight * scale
          ctx.drawImage(img, (64 - w) / 2, (64 - h) / 2, w, h)

          let link = document.querySelector("link[rel='icon']")
          if (!link) {
            link = document.createElement('link')
            link.rel = 'icon'
            document.head.appendChild(link)
          }
          link.type = 'image/png'
          link.href = canvas.toDataURL('image/png')
        }
        img.src = dataUrl
      })
      .catch(() => {})
  }, [])
}
