const { parse } = require('path')
const { stat } = require('fs').promises
const crypto = require('crypto')
const mkdirp = require('mkdirp')
const sharp = require('sharp')
const util = require('util')
const rimraf = util.promisify(require('rimraf'))

class ImageHandler {
  constructor({
    output,
    publicPath,
    sizes = [320, 640, 960, 1100, 1600],
    quality = 65,
    placeholderSize = 40,
  }) {
    this.output = output
    this.sizes = sizes
    this.publicPath = publicPath
    this.mimes = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
      avif: 'image/avif',
    }
    this.quality = quality
    this.placeholderSize = placeholderSize
  }
  async clear() {
    await rimraf(this.output)
    await mkdirp(this.output)
  }
  createPlaceholder(data, mime) {
    return `data:${mime};base64,${data.toString('base64')}`
  }
  getPublicPath(str) {
    return `${this.publicPath}/${str}`
  }
  createSrcSet(files) {
    return files
      .map(({ src, width }) => `${this.getPublicPath(src)} ${width}w`)
      .join(', ')
  }
  createContentDigest(input) {
    const content = typeof input !== 'string' ? JSON.stringify(input) : input
    return crypto.createHash('md5').update(content).digest('hex')
  }
  async getFile(path) {
    const stats = await stat(path)
    const digest = this.createContentDigest({
      stats,
      absolutePath: path,
    })
    const { name, base } = parse(path)
    const [, ext] = base.split('.')
    return {
      path,
      digest,
      name,
      ext,
      mime: this.mimes[ext],
    }
  }
  async optimizeImagePath(path) {
    const file = await this.getFile(path)
    const image = sharp(file.path)
    const placeholderData = await this.writeFile({
      image,
      width: this.placeholderSize,
      toBuffer: true,
    })
    const jpgs = await this.transformImage({
      image,
      file,
      ext: 'jpg',
    })
    const webp = await this.transformImage({
      image,
      file,
      ext: 'webp',
    })
    const { src, height, width } = jpgs[0]
    const data = {
      src: this.getPublicPath(src),
      height,
      width,
      name: file.name,
      srcSet: this.createSrcSet(jpgs),
      webpSrcSet: this.createSrcSet(webp),
      placeholder: this.createPlaceholder(placeholderData, file.mime),
    }
    return data
  }
  async transformImage({ image, file, ext }) {
    const metadata = await image.metadata()
    const promises = []
    const widthsToGenerate = new Set()
    this.sizes.forEach((size) => {
      const width = Math.min(metadata.width, size)
      // Only resize images if they aren't an exact copy of one already being resized...
      if (!widthsToGenerate.has(width)) {
        widthsToGenerate.add(width)
        const baseName = `${file.name}-${file.digest}-${width}`
        promises.push(
          this.writeFile({
            image,
            width,
            ext,
            baseName,
          })
        )
      }
    })
    const res = await Promise.all(promises)
    return res
  }
  async writeFile({ image, width, ext = 'jpg', baseName, toBuffer }) {
    return new Promise((resolve, reject) => {
      let resized = image.clone().resize(width, null)
      if (ext === 'jpg') {
        resized = resized.jpeg({
          quality: this.quality,
          progressive: true,
        })
      }
      if (ext === 'webp') {
        resized = resized.webp({
          quality: this.quality,
        })
      }
      if (toBuffer) {
        resized.toBuffer((err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      } else {
        const src = `${baseName}.${ext}`
        const savePath = `${this.output}/${src}`
        resized.toFile(savePath, (err, { width, height }) => {
          if (err) {
            return reject(err)
          }
          resolve({
            ext,
            src,
            width,
            height,
          })
        })
      }
    })
  }
}

module.exports = ImageHandler
