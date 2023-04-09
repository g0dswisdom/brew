const auth = require("../../index")
const { util } = require("../util")

async function getInfo(id, information) {
    return new Promise(async (resolve, reject) => {
        let thing = ""
        //console.log(auth.cookie)
        await util.sendRequest("get", `https://groups.roblox.com/v2/groups?groupIds=${id}`, {}, {}).then(async (res) => {
          for (const key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
              const element = res.data[key];
              element.map(async (data) => {
                if (information == "owner") {
                  return resolve(data["owner"]["id"])
                } else {
                  return resolve(data[`${information}`])
                }
              })
            }
          }
        })
        return thing
    })
}

module.exports = {
    getInfo
}