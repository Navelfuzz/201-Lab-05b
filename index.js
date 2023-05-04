'use strict';

let userName = prompt("What's your name?");
while (!userName){
  user = promt("Your name is required. Enter it now or your computer might... explode!");
}
alert(`Welcome to my About page ${userName}! Let's play a guessing game, please answer yes/no OR y/n`)

let score = 0;
let guess1 = prompt('Do I have a daughter?').toLowerCase();
if(guess1 === 'n' || guess1 === 'no'){
//    console.log('You are correct');
    alert('You are correct!');
    score += 1;
  } else if(guess1 === 'y' || guess1 === 'yes'){
//    console.log('Sorry, incorrect');
    alert('Sorry you are wrong, I have a son');
    score -=1;
  }
  
let guess2 = prompt('Am I in my 30s?').toLowerCase();
if(guess2 === 'y' || guess2 === 'yes'){
//    console.log('You are correct');
    alert('You are correct!');
    score += 1;
  } else if(guess2 === 'n' || guess2 === 'no'){
//    console.log('Sorry, incorrect');
    alert('Sorry you are wrong, I am getting old...');
    score -=1;
  }
  
let guess3 = prompt('Do I play the drums?').toLowerCase();
if(guess3 === 'n' || guess3 === 'no'){
//    console.log('You are correct');
  alert('You are correct!');
  score += 1;
} else if(guess3 === 'y' || guess3 === 'yes'){
//    console.log('Sorry, incorrect');
    alert('Nope, I have no rhythm for drums');
    score -=1;
  }
  
let guess4 = prompt('Do I drive a truck?').toLowerCase();
if(guess4 === 'n' || guess4 === 'no'){
//    console.log('You are correct');
 alert('You are correct!');
 score += 1;
  } else if(guess4 === 'y' || guess4 === 'yes'){
//    console.log('Sorry, incorrect');
    alert('Nope.. definitely driving a soccer mom SUV');
    score -=1;
  }
  
let guess5 = prompt('Am I over 6 ft tall?').toLowerCase();
if(guess5 === 'y' || guess5 === 'yes'){
   //    console.log('You are correct');
 alert('You are correct!');
 score += 1;
  } else if(guess5 === 'n' || guess5 === 'no'){
    //    console.log('Sorry, incorrect');
    alert('Sorry you are wrong, I am taller than some');
    score -=1;
  }

let numGuesses = 0; 
const maxAttempts = 4;
const correctNum = 77;

while (numGuesses < maxAttempts){
  let guess6 = prompt('Guess a number between 1 and 100');

  if (guess6 === correctNum){
    alert('Congratulations! You got it!');
    break;
  } else if (guess6 < correctNum){
    alert('Your guess is too low');
  } else {
    alert('Your guess is too high');
  }
  numGuesses++;
}

if (numGuesses === maxAttempts){
  alert(`Sorry ${userName}, you've run out of guesses. The correct answer was: ${correctNum}.`)
}

function guessSong(userName){
  const songs = ['wouldn\'t it be nice', 'you still believe in me', 'that\'s not me', 
  'don\'t talk (put your head on my shoulder)', 'i\'m waiting for the day', 'let\'s go away for awhile',
  'sloop john b', 'god only knows', 'i know there\'s an answer', 'here today', 
  'i just wasn\'t made for these times', 'pet sounds', 'caroline, no'];
  let guess7 = prompt("Name a song witten by The Beach Boys on their album 'Pet Sounds'" ).toLowerCase();

  for(let i = 0; i < 6; i++){
    if(songs.includes(guess7)){
      alert(`Correct! ${guess7} is on 'Pet Sounds'!`);
      score += 1;
      for (let j = 0; j < songs.length; j++){
        console.log(songs[j]);
      }
    } else if(!songs.includes(guess7));{
        alert(`Sorry... try again`);
    } else {
      alert(`Sorry... no more attempts, and your taste in music is questionable...`);
      score -= 1;
      for (let j = 0; j < songs.length; j++){
        console.log(songs[j]);
      }
    }
  }
}










// TODO: Display the user’s name back to them in your final message to the user.
alert(`Thanks for taking my quiz ${userName} :) you scored ${score}`);