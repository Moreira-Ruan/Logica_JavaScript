alert('Hello, welcome to game the secret number!');

let secretNumber = 5;
let kick = prompt('Choose a number between 1 and 10:');

if (kick == secretNumber) {
    console.log('Congratulations, you hit the number!');
} else {
    console.log('Sorry, you missed! The secret number was ' + secretNumber);
}