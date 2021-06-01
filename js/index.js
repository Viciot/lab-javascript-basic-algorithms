// Iteration 1: Names and Input
let hacker1 = "Victor"
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "PizzaBytes"
console.log(`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);


let type = "";
if (hacker1.length > hacker2.length) {
type = `"The driver has the longest name, it has ${hacker1.length} characters"`
} else if (hacker1.length < hacker2.length) {
type = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
} else if (hacker1.length == hacker2.length) {
type = `Wow, you both have equally long names, ${hacker1.length}  characters!`
} else {
    type = "other"
}
console.log(`${type}`)

// Iteration 3: Loops

