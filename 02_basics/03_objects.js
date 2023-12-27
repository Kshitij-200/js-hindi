// singleton

// object literals

// Object.create
const mySym = Symbol("key1")

const jsUser = {
    name: "Kshitij",
    "full name" : "Kshitij Pratap Tomer",
    age: "18",
    [mySym]: "mykey1",
    email: "xyz@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.email = "kshitij@gamil.com"
console.log(jsUser.email);
Object.freeze(jsUser)
jsUser.email = "kshitij2004@gamil.com"
console.log(jsUser.email);


jsUser.greetings = function(){
    console.log("Hello js user");
}

console.log(jsUser.greetings());
