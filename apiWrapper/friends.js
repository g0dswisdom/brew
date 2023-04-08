const myFriendCount = require("./friends/myFriendCount")
const pendingRequests = require("./friends/pendingRequests")
const userFriendCount = require("./friends/userFriendCount")
const sendFriendRequest = require("./friends/sendFriendRequest")

const friends = {
    async myFriendCount() { return myFriendCount.myFriendCount() },
    async pendingRequests() { return pendingRequests.pendingRequests() },
    async userFriendCount(id) { return userFriendCount.userFriendCount(id) },
    async sendFriendRequest(id) { return sendFriendRequest.sendFriendRequest(id) },
}


module.exports = {
    brewFriends: friends,
}