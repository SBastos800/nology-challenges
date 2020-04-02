// const myArray =[12, 4, 26, 44, 1043, 2];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// //Another way of writting this code 

// myArray.forEach((number) => {
//     console.log(number);
// });

// // const print = (number) => {
// //     console.log(number);
// // }

// // myArray.forEach(print);

// //Above is a callback function

// // another way of doing it, the same as the first with the for loop

// for (number of myArray) {
//     console.log(number);
// } //this fucntion is called for of loop


// const nology = [ 
//     ["Jonny", "Sunny", "Annika", "Sophie"],
//     ["Andy", "Nasir", "Sonia", "Sam"]
// ];

// const state = "mississippi";
// //loop through the state and replace all the i's with 1s
// //1. Loop through the string


// const newState = [...state]; //turning a string into an array

// for (let i = 0; i < newState.length; i++) {
//     return state.replace('i', 1);
//     if (newState[i] === "i") {
//         newState[i] = 1;

//     }
// }
// console.log(newState);
//2. if the letter is i, then replace it with 1
//3. console.log the new string
//Bonus: replace the s's with 5s


//Fizzbuzz
// 1. console.log all numbers to 1000
// 2. If the number is divisible by 3, replace it with fizz
// 2. If the number is divisible by 5, replace it with buzz
// 3. divisible by both, fizzbuzz!!!!!!



for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}



    











