const getInfo = require("./groups/getinfo")
const setDescription = require("./groups/setdescription")

const groups = {
    async getInfo(id, info) { return getInfo.getInfo(id, info) },
    async setDescription(id, description) { return setDescription.setDescription(id, description) }
}


module.exports = {
    brewGroups: groups
}