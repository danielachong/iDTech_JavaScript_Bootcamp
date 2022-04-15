// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE


// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE


// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
let words = [
    "This", "is", "Javascript", "Bootcamp!"
]
var sentence = ""
function createSentence(words){
    for (var number = 0; number < words.length; number += 1){
        sentence += words[number] + " " 
    }
    return sentence
}
console.log(createSentence(words));

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
