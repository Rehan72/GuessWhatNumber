'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//message display
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '🚯No Number!';
        displayMessage('🚯No Number!')
        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('😃correct Number!');
        // document.querySelector('.message').textContent = '😃correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

        // To win player background_color
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //when gusse is wrong

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👠Too high!' : '🥀Too low!')
            // document.querySelector('.message').textContent = guess > secretNumber ? '👠Too high!' : '🥀Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😝You lost the game!';
            displayMessage('😝You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
   

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('😃start gaming...');
    // document.querySelector('.message').textContent = '😃start gaming...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '❓';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// let array = [1, 4, 1, 2, 3, 4]
// let newUniqueArr = [...new Set(array)];
// newUniqueArr.reverse
// console.log(newUniqueArr);
// // array.reverse(),
// console.log(newUniqueArr);
// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);
// function hello() {
//     return "Hello,World!"
// };
// console.log(hello());
// hello();

// function myFunction(num, per) {

//     return (num / 100) * per;
// }


// console.log(myFunction(100, 50));
// console.log(myFunction(777, 2));
// console.log(myFunction(500, 99));

// function myFunction(number) {
//     if (number % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(myFunction(5));