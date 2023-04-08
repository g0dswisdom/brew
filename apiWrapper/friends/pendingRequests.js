const auth = require("../../index")
const { util } = require("../util")

async function pendingRequests() {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", "https://friends.roblox.com/v1/user/friend-requests/count", {}, {Cookie: `.ROBLOSECURITY=${auth.cookie}`}).then(async (res) => {
            resolve(res.data.count);
        })
    })
}

module.exports = {
    pendingRequests
}