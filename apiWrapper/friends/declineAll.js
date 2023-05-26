const auth = require("../../index")
const { util } = require("../util")

async function declineAll() {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("post", `https://friends.roblox.com/v1/user/friend-requests/decline-all`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            resolve();
        })
    })
}

module.exports = {
    declineAll
}