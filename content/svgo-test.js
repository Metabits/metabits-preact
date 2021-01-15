const { readFile, writeFile } = require('fs').promises
const { resolve } = require('path')
const SVGO = require('svgo')
const { promisify } = require('util')

const svgo = new SVGO()

promisify(svgo.optimize)

const toKib = (bytes) => Math.round((bytes / 1024) * 1000) / 1000

function printProfitInfo(inBytes, outBytes) {
  const profitPercents = 100 - (outBytes * 100) / inBytes
  console.log(
    `${toKib(inBytes)} KiB ${profitPercents < 0 ? '+' : '-'} ${
      Math.abs(Math.round(profitPercents * 10)) / 10
    }% = ${toKib(outBytes)} KiB`
  )
}

async function run() {
  const readIn = await readFile(resolve(__dirname, 'demo.svg'), 'utf-8')
  const prevFileSize = Buffer.byteLength(readIn, 'utf8')
  const { data } = await svgo.optimize(readIn)
  const resultFileSize = Buffer.byteLength(data, 'utf8')
  printProfitInfo(prevFileSize, resultFileSize)
  await writeFile(resolve(__dirname, 'demo-after.svg'), data, 'utf-8')
}
run()
