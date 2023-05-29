const auth = require("../../index")
const { util } = require("../util")

async function setDisplayName(userId, displayName) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("patch", `https://users.roblox.com/v1/users/${userId}/display-names`, {"newDisplayName": displayName}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(`Successfully set display name to ${displayName}`)
            } else {
                resolve(`Couldn't set display name. Status code: ${res.status}`)
            }
        }).catch(function (err) {
            if (err.response) {
                console.log(`Couldn't set display name. Status code: ${err.status}`)
            } else {
                console.log(err.message)
            }
        })
    })
}

module.exports = {   
    setDisplayName
}