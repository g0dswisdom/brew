const auth = require("../../index")
const { util } = require("../util")

async function getPhone(method) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://accountinformation.roblox.com/v1/phone`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(res.data[method])
            } else {
                reject(`Couldn't get account phone. Status code: ${res.status}`)
            }
        })
    })
}

module.exports = {
    getPhone
}
