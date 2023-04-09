const auth = require("../../index")
const { util } = require("../util")

async function unfriendUser(id) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("post", `https://friends.roblox.com/v1/users/${id}/unfriend`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            resolve("Successfully unfriended user!");
        })
    })
}

module.exports = {
    unfriendUser
}