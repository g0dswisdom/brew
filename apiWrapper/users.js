const { readdirSync } = require('fs')
const { join } = require('path')

const usersDir = join(__dirname, 'users')

const brewUsers = readdirSync(usersDir)
  .filter(file => file.endsWith('.js'))
  .reduce((acc, file) => {
    const { name, ext } = parseFileName(file)
    acc[name] = require(join(usersDir, file))[name]
    return acc
  }, {})

function parseFileName(file) {
  const [name, ext] = file.split('.')
  return { name, ext }
}

module.exports = { brewUsers }
