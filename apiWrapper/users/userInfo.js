const auth = require("../../index")
const { util } = require("../util")

async function userInfo(method) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("get", `https://www.roblox.com/mobileapi/userinfo`, {}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(res.data[method])
            }
        }).catch(function (err) {
            console.log(err.message)
        })
    })
}

module.exports = {
    userInfo
}