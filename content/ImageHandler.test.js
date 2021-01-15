const { join } = require('path')
const { pages } = require('./pages')
const ImageHandler = require('./ImageHandler')

const publicPath = '/assets/images'
const output = join(__dirname, '..', `src${publicPath}`)

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
  }
  return pages
}

async function run() {
  const handler = new ImageHandler({
    output,
    publicPath,
  })
  await handler.clear()
  const data = await handler.optimizeImagePath(
    'content/images/pages/app-development.svg'
  )
  //const data = await optimizePages(pages, handler)
  console.log(JSON.stringify(data, null, 2))
}

run()

/*
async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name)
      return dirent.isDirectory() ? getFiles(res) : res
    })
  )
  return Array.prototype.concat(...files)
}
*/
