const auth = require("../../index")
const { util } = require("../util")

async function setDescription(id, description) {
    await util.sendRequest("patch", `https://groups.roblox.com/v1/groups/${id}/description`, {"description": `${description}`}, { Cookie: `.ROBLOSECURITY=${auth.cookie}`, "X-CSRF-TOKEN": await util.getCsrf(auth.cookie) }).catch(function (error) {
        console.log(error)
    })
} 

module.exports = {
    setDescription
}