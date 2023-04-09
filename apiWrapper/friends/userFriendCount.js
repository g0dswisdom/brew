const auth = require("../../index")
const { util } = require("../util")

async function userFriendCount(id) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://friends.roblox.com/v1/users/${id}/friends/count`, {}, {}).then(async (res) => {
            resolve(res.data.count);
        })
    })
}

module.exports = {
    userFriendCount
}