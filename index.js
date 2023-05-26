/*
   - Brew (Based Roblox Endpoint Wrapper)
   - A roblox api wrapper created for fun
   - I'm not sure if everything here works but it should as I tested everything
   - Don't message me if something doesn't work. Just create a pull request with the fix.
*/

const { brewGroups } = require("./apiWrapper/groups")
const { brewFriends } = require("./apiWrapper/friends")
const { brewAccountInfo } = require("./apiWrapper/accountInformation") 

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
    accountInfo: brewAccountInfo,
    login: brewLogin,
    logout: brewLogout
};
