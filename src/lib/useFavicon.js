import { useEffect } from 'react'
import logoSrc from '../assets/logo.jpeg'
import { getTransparentLogoDataUrl } from './transparentLogo'

export function useFavicon() {
  useEffect(() => {
    getTransparentLogoDataUrl(logoSrc)
      .then((dataUrl) => {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const img = new Image()
        img.onload = () => {
          // The mark occupies roughly the top ~62% of the square; crop to it.
          const cropSize = img.naturalWidth * 0.62
          ctx.drawImage(img, 0, 0, cropSize, cropSize, 0, 0, 64, 64)

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
