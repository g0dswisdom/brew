const auth = require("../../index")
const { util } = require("../util")

async function authenticatedCountryCode() {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://users.roblox.com/v1/users/authenticated/country-code`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(res.data.countryCode)
            }
        }).catch(function (err) {
            console.log(err.message)
        })
    })
}

module.exports = {
    authenticatedCountryCode
}