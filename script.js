'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const colorStyle = function(color) {
  document.querySelector('.message').style.color = color;
}

const colorBackground = function(backgroundColor) {
  document.querySelector('.number').style.backgroundColor = backgroundColor;
}


document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  

  if (!guess) {
    //when there is no input
    // document.querySelector('.message').textContent = 'no number!';
    displayMessage('no number!');
    // document.querySelector('.message').style.color = '#f6340d';
    colorStyle('#f6340d');

  } else if (guess === secretNumber) {
    //when player wins
    // document.querySelector('.message').textContent = 'Correct Number!'
    displayMessage('Correct Number!');
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.number').style.backgroundColor = '#c9ca13';
    colorBackground('#c9ca13');
    document.querySelector('header').style.borderBottomColor = '#c9ca13';
    // document.querySelector('.message').style.color = '#79fb06';
    colorStyle('#79fb06');

    document.querySelector('.number').textContent = secretNumber;


    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    //when guess is wrong
    if (score > 1) {
      // document.querySelector('.message').textContent = 
      // guess > secretNumber ? 'too high!' : 'too low!';
      displayMessage( guess > secretNumber ? 'too high!' : 'too low!');
      // document.querySelector('.message').style.color = '#f6340d';
      colorStyle('#f6340d');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost the game!'
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }


  // } else if (guess > secretNumber) {
  //   //when guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high!'
  //     document.querySelector('.message').style.color = '#f6340d';
  //     score = score - 1;
  //     //(same as 'score--');
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game!'
  //     document.querySelector('.score').textContent = 0;
  //   }

  // } else if ( guess < secretNumber) {
  //   //when guess is too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low!'
  //     document.querySelector('.message').style.color = '#f6340d';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game!'
  //     document.querySelector('.score').textContent = 0;
  //   }
  }
  
});

document.querySelector('.again').addEventListener('click' , function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // document.querySelector('.message').textContent = 'start quessing...';
  displayMessage('start quessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.number').style.backgroundColor = '#eeeeee';
  colorBackground('#eeeeee');
  document.querySelector('header').style.borderBottomColor = '#eeeeee';
  // document.querySelector('.message').style.color = '#eeeeee';
  colorStyle('#eeeeee');

});