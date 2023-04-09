const auth = require("../../index")
const { util } = require("../util")

async function myFriendCount() {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", "https://friends.roblox.com/v1/my/friends/count", {}, {Cookie: `.ROBLOSECURITY=${auth.cookie}`}).then(async (res) => {
            resolve(res.data.count);
        })
    })
}

module.exports = {
    myFriendCount
}