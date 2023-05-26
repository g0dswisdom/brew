const auth = require("../../index")
const { util } = require("../util")

async function setGender(gender) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://accountinformation.roblox.com/v1/gender`, {"gender": gender}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve("Successfully set account gender")
            } else {
                resolve(`Couldn't set account gender. Status code: ${res.status}`)
            }
        })
    })
}

module.exports = {
    setGender
}