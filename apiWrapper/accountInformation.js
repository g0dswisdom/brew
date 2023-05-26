const { readdirSync } = require('fs')
const { join } = require('path')

const accDir = join(__dirname, 'accountInfo')

const brewAccountInfo = readdirSync(accDir)
  .filter(file => file.endsWith('.js'))
  .reduce((acc, file) => {
    const { name, ext } = parseFileName(file)
    acc[name] = require(join(accDir, file))[name]
    return acc
  }, {})

function parseFileName(file) {
  const [name, ext] = file.split('.')
  return { name, ext }
}

module.exports = { brewAccountInfo }
