
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// Calculate their BMI with the formula
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

// Display it to the console
console.log(markBMI);
console.log(johnBMI);

// Compare their BMI's so the boolean will process it
// to be true or false
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/*
. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

*/
if(markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

/*
Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/

console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);

// SOLVED 🎉🎉🎉🎉🎉