const auth = require("../../index")
const { util } = require("../util")

async function userFollowerCount(id) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://friends.roblox.com/v1/users/${id}/followers/count`, {}, {}).then(async (res) => {
            resolve(res.data.count);
        })
    })
}

module.exports = {
    userFollowerCount
}