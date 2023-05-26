const auth = require("../../index")
const { util } = require("../util")

async function acceptFriendRequestWithToken(id, friendingToken) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("post", `https://friends.roblox.com/v1/users/2/accept-friend-request-with-token`, {"friendingToken": friendingToken}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve("Successfully accepted friend request from user with friendingToken!");
            } else {
                resolve("Could not accept friend request from user! (friendingToken method)")
            }
        }).catch(err => {
            console.log(err)
        })
    })
}

module.exports = {
    acceptFriendRequestWithToken
}