// Write a function that takes in a lower case word and makes it upper case
// Write a function that multiplies three numbers together and returns the result
// Write a function that reverses a string so it reads backwards
// Write a function that checks whether a number is greater than 500
    // If the number is greater, return true
    // If the number is less, return false
// Write a function that takes in a letter and returns the letter before it in the alphabet
// EXTENSION:
    // Write a function that takes in a word and a number
        // Print the word out that number of times


// Write a function that takes in a lower case word and makes it upper case


// const transform = (str) => {
//     const result = str.toUpperCase();
//     return result;
// }

// const result2 = transform("hello world");
// console.log(result2);


// Write a function that multiplies three numbers together and returns the result


// const multiplyThreeNumbers = (num1, num2, num3) => num1*num2*num3;
  

//  const result2 = multiplyThreeNumbers(2, 2, 2);
//  console.log(result2);

 // Write a function that reverses a string so it reads backwards

const reverseString = (str) => {
const stringReversed = str.split("").reverse().join("");
return stringReversed;
}

console.log(reverseString("hello"));
//the above function wasn't corrected in classroom, I did it at home but it worked


//  const reverse = (str) => {
//     let reversed = "";    
//     for (let i = str.length - 1; i >= 0; i--){        
//       reversed += str[i];
//     }    
//     return reversed;
//   }

//   const result = reverse("hello world");
//   console.log(result);

// //   another way of doing it

// const reverseString = (str) => str.split("").reverse().join(""); 
// const result = reverseString("ellen");
// console.log (result);




// Write a function that checks whether a number is greater than 500
    // If the number is greater, return true
    // If the number is less, return false


// const checkSize = (number) => number >= 500;

// const result = checkSize(600);
// console.log(result);

//The above function is much better and it is what we've done in classroom but the below function gets to the same result but is much longer. We should use the top function.

// const greaterThanFiveHundred = (num) => {

// if (num > 500) {
//     return true
// } else if (num < 500) {
//     return false
// } else {
//     console.log("your number is 500!")
// }
//     }

// const result = greaterThanFiveHundred(500);
// console.log(result);

// Write a function that takes in a letter and returns the letter before it in the alphabet

const returnLetter = (letter) => {
  
    return String.fromCharCode(letter.charCodeAt(0) - 1); 
}

console.log(returnLetter("s"));
//the above function wasn't corrected in classroom but it worked; the results from classroom are bellow


// const letterBefore = (letter) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const index = alphabet.indexOf(letter);
//     const indexBefore = index - 1;
//     const newLetter = alphabet.charAt(indexBefore);
//     return newLetter;
// }
// console.log(letterBefore('g'));

// const olliesLetterBefore = (letter) => {
//     const charCode = letter.charCodeAt(0) - 1;
//     return String.fromCharCode(charCode);
// }
// console.log(olliesLetterBefore('r'));

// Write a function that takes in a letter and returns the letter before it in the alphabet

// The following problem i resolved using google but it wasn't checked by Ollie

// const letterBefore = (alphabet) => {
    
//     return String.fromCharCode(alphabet.charCodeAt(0) - 1); 
// }
// const result = letterBefore("s");
// console.log(result);



// EXTENSION:
    // Write a function that takes in a word and a number
        // Print the word out that number of times

// This exercise wasn't corrected in classroom. I'm not sure if it's correct. I solved it at home



const repeatWordNumTimes = (word, times) => {
    if (times > 0)
      return word.repeat(times);
    else
      return "";
  }
  console.log(repeatWordNumTimes("hello", 3));
  


























