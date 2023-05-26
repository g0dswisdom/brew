const auth = require("../../index")
const { util } = require("../util")

async function getDescription() {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://accountinformation.roblox.com/v1/description`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(res.data.description)
            } else {
                reject(`Couldn't get account description. Status code: ${res.status}`)
            }
        })
    })
}

module.exports = {
    getDescription
}