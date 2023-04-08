/*
   - Brew (Based Roblox Endpoint Wrapper)
*/

const { brewGroups } = require("./apiWrapper/groups")
const { brewFriends } = require("./apiWrapper/friends")

var cookie

function brewLogin(auth) {
    cookie = auth;
    exports.cookie = auth;
}

function brewLogout() {
    console.log(exports.cookie)
}
Object.defineProperty(exports, 'cookie', {
     get: function() {
        return cookie;
    },
    set: function(){
        return new Error("Cant access.")
    },
    configurable: false,
    enumerable: true
});

module.exports = {
    groups: brewGroups,
    friends: brewFriends,
    login: brewLogin,
    logout: brewLogout
};