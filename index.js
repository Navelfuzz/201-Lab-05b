'use strict';

let userName = prompt("What's your name?");
while (!userName){
  userName = prompt("Your name is required. Enter it now or your computer might... explode!");
}
alert(`Welcome to my About page ${userName}! Let's play a guessing game, please answer yes/no OR y/n`)
let score = 0;

function guess1(){
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
}
guess1();


function guess2(){
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
}
guess2();  


function guess3(){
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
}  
guess3();

function guess4(){
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
}  
guess4();

 
function guess5() {
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
}  
guess5();



function secretNum(userName){
  let numGuesses = 0; 
  const maxAttempts = 4;
  const correctNum = '77';
  
  while (numGuesses < maxAttempts){
    let guess6 = prompt('Guess a number between 1 and 100');
  
    if (guess6 == correctNum){
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
}
secretNum();

function guessSong(){
  const songs = ['wouldn\'t it be nice', 'you still believe in me', 'that\'s not me', 
  'don\'t talk (put your head on my shoulder)', 'i\'m waiting for the day', 'let\'s go away for awhile',
  'sloop john b', 'god only knows', 'i know there\'s an answer', 'here today', 
  'i just wasn\'t made for these times', 'pet sounds', 'caroline, no'];


  for(let i = 0; i < 6; i++){
    let guess7 = prompt("Name a song witten by The Beach Boys on their album 'Pet Sounds'" ).toLowerCase();
    if(songs.includes(guess7)){
      alert("Correct " + guess7 + " is on 'Pet Sounds' " + songs.join(", "));
      score += 1;
      break;
    } else if(i === 5){
        alert("Sorry no more attempts" + songs.join(", "));
    } else {
      alert("Incorrect, try again.");
    }
  }
}
guessSong();

function finalScore(){
  alert(`Thanks for taking my quiz ${userName} :) you scored ${score}`);
}
finalScore();