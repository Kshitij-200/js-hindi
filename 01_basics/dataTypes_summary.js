// Primitives
// 7 Types : String, Number, Boolean, null, undefined, Symbol(for making unique), BigInt(big numbers)

const score = 100.3
const isLoggedIn = false
let userEmail;
const temp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const BigInt = 3545566651151511n

// Reference Type(Non - Primitives)
// Arrays, Objects, Functions

const heroes = ["spider-man","Iron-man","Hulk","Thor"];
let myObj = {
    name: "Kshitij",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof score);