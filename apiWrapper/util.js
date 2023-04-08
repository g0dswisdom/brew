const axios = require("axios")

class util {
    static async getCsrf(cookie) {
        return new Promise(async (resolve, reject) => {
            await axios.request({
                url: "https://auth.roblox.com/v2/logout",
                method: "post",
                headers: {
                    Cookie: `.ROBLOSECURITY=${cookie}`
                }
            }).then(function (response) {
                return resolve(response.headers["x-csrf-token"])
            }).catch(function (error) {
                return resolve(error.response.headers["x-csrf-token"]) // It only fires catch for some reason
            })
        })
    }
    static async sendRequest(method, endpoint, data, headers) {
        return new Promise(async (resolve, reject) => {
            await axios.request({
                url: endpoint,
                method: method,
                data: data,
                headers: headers
            }).then(function (response) {
                return resolve(response)
            }).catch(function (error) {
                return resolve(error)
            })
        })
    }

    static HandleError(error) {
        return console.log(error)
    }
}



module.exports = { util }