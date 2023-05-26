const auth = require("../../index")
const { util } = require("../util")

async function getGender() {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://accountinformation.roblox.com/v1/gender`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(res.data.gender)
            } else {
                reject(`Couldn't get account gender. Status code: ${res.status}`)
            }
        })
    })
}

module.exports = {
    getGender
}