const { readdirSync } = require('fs')
const { join } = require('path')

const friendsDir = join(__dirname, 'friends')

const brewFriends = readdirSync(friendsDir)
  .filter(file => file.endsWith('.js'))
  .reduce((acc, file) => {
    const { name, ext } = parseFileName(file)
    acc[name] = require(join(friendsDir, file))[name]
    return acc
  }, {})

function parseFileName(file) {
  const [name, ext] = file.split('.')
  return { name, ext }
}

module.exports = { brewFriends }
