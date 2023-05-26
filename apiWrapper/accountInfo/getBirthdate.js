const auth = require("../../index")
const { util } = require("../util")

async function getBirthdate(method) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://accountinformation.roblox.com/v1/birthdate`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            resolve(res.data[method]) // birthMonth, birthDay, birthYear
        })
    })
}

module.exports = {
    getBirthdate
}