const auth = require("../../index")
const { util } = require("../util")

async function setBirthdate(birthMonth, birthDay, birthYear, password) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("post", `https://accountinformation.roblox.com/v1/birthdate`, {"birthMonth": birthMonth, "birthDay": birthDay, "birthYear": birthYear, "password": password}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve("Successfully set birthdate")
            } else {
                resolve(`Unable to set birthdate. Status code: ${res.status}`)
            }
        })
    })
}

module.exports = {
    setBirthdate
}