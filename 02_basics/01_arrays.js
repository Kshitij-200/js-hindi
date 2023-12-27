// Arrays

const myArr = [0, 1, 2, 3, 4, "Kshitij"]
// console.log(myArr);

// Arrays Method

myArr.push(6) // add 6 tpo the array to the last
//console.log(myArr);
myArr.pop() // pops last value
//console.log(myArr);


// 9 on the start(shift all to right)
myArr.unshift(9)
//console.log(myArr);

// removes first element (shift all to left)
myArr.shift()
//console.log(myArr);

// console.log(myArr.includes(4));

// const newArr1 = myArr.join()
// console.log(newArr1);
// console.log(myArr);


// slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)  // 1,2 include 3 not include
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

