import { useEffect, useState } from 'react'

/**
 * The source logo file is shot on a solid black background with no alpha
 * channel. We only have that one flattened version, so we recover
 * transparency with an "un-multiply" matte: on a black backdrop, a pixel's
 * observed value equals trueColor * alpha, so alpha ~= max(r,g,b) and
 * trueColor ~= observed / alpha. This turns the black square into a clean
 * transparent background wherever the logo appears on white.
 */
function unmultiplyBlackMatte(ctx, width, height) {
  const imageData = ctx.getImageData(0, 0, width, height)
  const d = imageData.data
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i]
    const g = d[i + 1]
    const b = d[i + 2]
    const alpha = Math.max(r, g, b)
    if (alpha === 0) {
      d[i + 3] = 0
    } else {
      d[i] = Math.min(255, Math.round((r / alpha) * 255))
      d[i + 1] = Math.min(255, Math.round((g / alpha) * 255))
      d[i + 2] = Math.min(255, Math.round((b / alpha) * 255))
      d[i + 3] = alpha
    }
  }
  ctx.putImageData(imageData, 0, 0)
}

let cachedPromise = null

export function getTransparentLogoDataUrl(src) {
  if (cachedPromise) return cachedPromise

  cachedPromise = new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas 2D context unavailable'))
        return
      }
      ctx.drawImage(img, 0, 0)
      unmultiplyBlackMatte(ctx, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => reject(new Error('Failed to load logo source image'))
    img.src = src
  })

  return cachedPromise
}

export function useTransparentLogo(src) {
  const [dataUrl, setDataUrl] = useState(null)

  useEffect(() => {
    let active = true
    getTransparentLogoDataUrl(src)
      .then((url) => {
        if (active) setDataUrl(url)
      })
      .catch(() => {
        if (active) setDataUrl(src)
      })
    return () => {
      active = false
    }
  }, [src])

  return dataUrl
}
