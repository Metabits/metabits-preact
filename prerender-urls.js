const { join } = require('path')

const content = require('./content/pages')
const ImageHandler = require('./content/ImageHandler')

const publicPath = '/assets/images'
const output = join(__dirname, `src${publicPath}`)

async function optimizePages(pages, handler) {
  for await (const page of pages) {
    if (page.image) {
      page.image = await handler.optimizeImagePath(page.image)
    }
    if (page.contentItems) {
      for await (const item of page.contentItems) {
        item.image = await handler.optimizeImagePath(item.image)
      }
    }
    if (page.hero && page.hero.image) {
      page.hero.image = await handler.optimizeImagePath(page.hero.image)
    }
    if (page.blocks) {
      for await (const item of page.blocks) {
        item.image = await handler.optimizeImagePath(item.image)
      }
    }
  }
  return pages
}

async function getContent() {
  const handler = new ImageHandler({
    output,
    publicPath,
  })
  await handler.clear()
  console.time('Optimize images')
  const pages = await optimizePages(content.pages, handler)
  console.timeEnd('Optimize images')
  const layout = {
    menu: pages
      .filter(({ menuName }) => menuName)
      .map(({ menuName, url, isButton }) => ({
        menuName,
        url,
        isButton,
      })),
  }
  return pages.map(({ url, title, description, ...page }) => {
    const seoExtra =
      page.image && page.image.src
        ? {
            image: page.image.src,
          }
        : {}
    return {
      url,
      title,
      description,
      seo: {
        title,
        description,
        ...seoExtra,
      },
      layout,
      ...page,
    }
  })
}

module.exports = getContent
