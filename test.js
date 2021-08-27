const { readFileSync } = require('fs')

const { refBuffer } = require('./index.node')
const { displayMemoryUsageFromNode } = require('./util')

const BigBuffer = readFileSync('yarn.lock')

const initial = process.memoryUsage()

async function main() {
  for (const [i] of Array.from({ length: 10000000 }).entries()) {
    let refCount = refBuffer(BigBuffer)
    if (refCount) {
      throw new Error(`refCount should be 0, but got ${refCount}`)
    }
    if (i % 1000000 === 0) {
      await sleep()
      if (typeof global.gc === 'function') {
        global.gc()
      }
      displayMemoryUsageFromNode(initial)
    }
  }
}

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

main()
