const auth = require("../../index")
const { util } = require("../util")

async function acceptFriendRequest(id) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("post", `https://friends.roblox.com/v1/users/${id}/accept-friend-request`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve();
            } else {
                resolve("Could not accept friend request from user!")
            }
        }).catch(err => {
            console.log(err)
        })
    })
}

module.exports = {
    acceptFriendRequest
}