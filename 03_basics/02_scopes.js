
//let c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("INNER ",a);
}



// console.log(a);
// console.log(b);
//console.log(c);


function one(){
    const username = "kshitij"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // gives error

    // two()
}

// one()

if(true){
    const username = "kshitij"
    if(username === "Kshitij"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); // gives error
}

//console.log(username); // gives error

addOne(5) // doesnot gives error
function addOne(num){
    return num + 1
}



// addTwo(5) // gives error
const addTwo = function(num){
    return num + 2
}

addTwo(5)

