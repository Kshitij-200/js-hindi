function sayMyName(){
    console.log("K");
    console.log("K");
    console.log("K");
    console.log("K");
}

// sayMyName()

function add2Numbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// add2Numbers(3,4)

// const result = add2Numbers(3,5)

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kshitij"));
console.log(loginUserMessage());