const auth = require("../../index")
const { util } = require("../util")

async function setDescription(description) {
    return new Promise(async (resolve, reject) => {
        await util.sendRequest("post", `https://accountinformation.roblox.com/v1/description`, {"description": description}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie)}).then(async (res) => {
            if (res.status == 200) {
                resolve(`Successfully set user description to ${description}`)
            } else {
                resolve(`Couldn't set account description. Status code: ${res.status}`)
            }
        })
    })
}

module.exports = {
    setDescription
}