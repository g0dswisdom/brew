const brew = require("./index")

brew.login("Cookie")

// Groups
brew.groups.getInfo("1", "name").then(name => console.log(`Group Name: ${name}`))
brew.groups.setDescription("1", "pooper").then(console.log('Successfully set group description!'))

// Friends
brew.friends.myFriendCount().then(count => console.log(`Your friends count: ${count}`))
brew.friends.pendingRequests().then(count => console.log(`Your pending friend requests: ${count}`))
brew.friends.userFriendCount("1").then(count => console.log(`User's friend count: ${count}`))
brew.friends.sendFriendRequest("2").then(console.log("Successfully sent friend request to user!"))
brew.friends.declineAll().then(console.log("Successfully declined all friend requests!"))
brew.friends.userFollowerCount("1").then(count => console.log(`User's follower count: ${count}`))
brew.friends.acceptFriendRequest("1").then(resp => console.log(resp))
brew.friends.declineFriendRequest("1").then(resp => console.log(resp))
brew.friends.acceptFriendRequestWithToken("1", "abc").then(resp => console.log(resp))
brew.friends.unfriendUser("1").then(resp => console.log(resp))

// Account Information
brew.accountInfo.getBirthdate("birthMonth").then(resp => console.log(`Birth month: ${resp}`))
brew.accountInfo.setBirthdate("birthMonth", "birthDay", "birthYear", "password").then(resp => console.log(resp))
brew.accountInfo.getDescription().then(resp => console.log(`Account description: ${resp}`))
brew.accountInfo.setDescription("Hello").then(resp => console.log(resp))
brew.accountInfo.getGender().then(resp => console.log(`Account gender: ${resp}`))
brew.accountInfo.setGender("2").then(resp => console.log(resp))

// Users
brew.users.setDisplayName("ID", "Real").then(resp => console.log(resp))
brew.users.userInfo("RobuxBalance").then(resp => console.log(`Robux balance: ${resp}`)) // RobuxBalance, UserID, ThumbnailUrl, UserName, IsAnyBuildersClubMember, IsPremium
brew.users.info("1", "displayName").then(resp => console.log(`User display name: ${resp}`))
brew.users.authenticated("name").then(resp => console.log(`Authenticated name: ${resp}`))
brew.users.authenticatedCountryCode().then(resp => console.log(`Country code: ${resp}`))
