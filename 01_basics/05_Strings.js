const name = "Kshitij"
const repoCount = 60

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Jeff")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-3,4)
console.log(anotherString);

const newString1 = "       kshitij      "
console.log(newString1.trim());

const url = "https://kshitij.com%20tomer"
console.log(url.replace('%20',"-"));

console.log(url.includes('tomer'));

console.log();