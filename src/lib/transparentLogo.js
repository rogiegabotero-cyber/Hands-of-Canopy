import { useEffect, useState } from 'react'

/**
 * Finds the bounding box of non-transparent pixels within the left
 * `maxXFraction` slice of the canvas, so we can isolate just the mark from
 * a wide mark+wordmark lockup image without hand-measuring crop percentages.
 */
function findContentBoundingBox(imageData, width, height, maxXFraction) {
  const d = imageData.data
  const scanWidth = Math.round(width * maxXFraction)
  let minX = width
  let minY = height
  let maxX = 0
  let maxY = 0
  let found = false

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < scanWidth; x++) {
      const alpha = d[(y * width + x) * 4 + 3]
      if (alpha > 10) {
        found = true
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }

  if (!found) return null
  return { minX, minY, maxX, maxY }
}

const cache = new Map()

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load logo source image'))
    img.src = src
  })
}

/**
 * The source lockup already has a real alpha channel, so this just
 * isolates the mark artwork (the left portion) from the wordmark next to
 * it, cropping tightly with a little padding so anti-aliased edges aren't
 * clipped.
 */
export function getTransparentMarkDataUrl(src, { maxXFraction = 0.42, padFraction = 0.04 } = {}) {
  if (cache.has(src)) return cache.get(src)

  const promise = loadImage(src).then((img) => {
    const width = img.naturalWidth
    const height = img.naturalHeight
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D context unavailable')
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, width, height)

    const box = findContentBoundingBox(imageData, width, height, maxXFraction)
    if (!box) return canvas.toDataURL('image/png')

    const boxWidth = box.maxX - box.minX
    const boxHeight = box.maxY - box.minY
    const padX = Math.round(boxWidth * padFraction)
    const padY = Math.round(boxHeight * padFraction)
    const cropX = Math.max(0, box.minX - padX)
    const cropY = Math.max(0, box.minY - padY)
    const cropWidth = Math.min(width - cropX, boxWidth + padX * 2)
    const cropHeight = Math.min(height - cropY, boxHeight + padY * 2)

    const cropCanvas = document.createElement('canvas')
    cropCanvas.width = cropWidth
    cropCanvas.height = cropHeight
    const cropCtx = cropCanvas.getContext('2d')
    if (!cropCtx) throw new Error('Canvas 2D context unavailable')
    cropCtx.putImageData(imageData, -cropX, -cropY, cropX, cropY, cropWidth, cropHeight)
    return cropCanvas.toDataURL('image/png')
  })

  cache.set(src, promise)
  return promise
}

export function useTransparentMark(src) {
  const [dataUrl, setDataUrl] = useState(null)

  useEffect(() => {
    let active = true
    getTransparentMarkDataUrl(src)
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
