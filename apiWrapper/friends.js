const myFriendCount = require("./friends/myFriendCount")
const pendingRequests = require("./friends/pendingRequests")
const userFriendCount = require("./friends/userFriendCount")
const sendFriendRequest = require("./friends/sendFriendRequest")
const declineAll = require("./friends/declineAll")
const userFollowerCount = require("./friends/userFriendCount")
const acceptFriendRequest = require("./friends/acceptFriendRequest")
const declineFriendRequest = require("./friends/declineFriendRequest")
const acceptFriendRequestWithToken = require("./friends/acceptReqWithToken")
const unfriendUser = require("./friends/unfriendUser")

const friends = {
    async myFriendCount() { return myFriendCount.myFriendCount() },
    async pendingRequests() { return pendingRequests.pendingRequests() },
    async userFriendCount(id) { return userFriendCount.userFriendCount(id) },
    async sendFriendRequest(id) { return sendFriendRequest.sendFriendRequest(id) },
    async declineAll() { return declineAll.declineAll() },
    async userFollowerCount(id) { return userFollowerCount.userFriendCount(id) },
    async acceptFriendRequest(id) { return acceptFriendRequest.acceptFriendRequest(id) },
    async declineFriendRequest(id) { return declineFriendRequest.declineFriendRequest(id) },
    async acceptFriendRequestWithToken(id, friendingToken) { return acceptFriendRequestWithToken.acceptFriendRequestWithToken(id, friendingToken) },
    async unfriendUser(id) { return unfriendUser.unfriendUser(id) }
}


module.exports = {
    brewFriends: friends,
}