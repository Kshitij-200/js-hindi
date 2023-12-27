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
// console.log(loginUserMessage());

function calaculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calaculateCartPrice(200,400,500,1000));

const user = {
    username: "kSHITIJ",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 399
})

const newArray = [200,400,500,1000]
function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(newArray));