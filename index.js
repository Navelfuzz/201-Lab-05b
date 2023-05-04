'use strict';

let userName = prompt("What's your name?");

alert(`Welcome to my About page ${userName}! Let's play a guessing game, please answer yes/no OR y/n`)

/**
 * ask name via prompt
 * display name via custom greeting
 * display the user name back to them in your final message to the user
*/

// To Do: This needs to prompt the user with 5 yes or no questions
//          - must accept y/n or yes/no with cese sensitivity normalization
//          - .toUpperCase() or .toLowerCase() functions
//          - tell the user if theyr are correct or incorrect
//          - add console.log() for my responses, then comment out and replace with alerts()

let guess1 = prompt('Do I have a daughter?').toLowerCase();
if(guess1 === 'n' || guess1 === 'no'){
//    console.log('You are correct');
    alert('You are correct!');
  } else if(guess1 === 'y' || guess1 === 'yes'){
//    console.log('Sorry, incorrect');
    alert('Sorry you are wrong, I have a son');
  }
  
let guess2 = prompt('Am I in my 30s?').toLowerCase();
if(guess2 === 'y' || guess2 === 'yes'){
//    console.log('You are correct');
    alert('You are correct!');
  } else if(guess2 === 'n' || guess2 === 'no'){
//    console.log('Sorry, incorrect');
    alert('Sorry you are wrong, I am getting old...');
  }
  
let guess3 = prompt('Do I play the drums?').toLowerCase();
if(guess3 === 'n' || guess3 === 'no'){
//    console.log('You are correct');
alert('You are correct!');
  } else if(guess3 === 'y' || guess3 === 'yes'){
//    console.log('Sorry, incorrect');

    alert('Nope, I have no rhythm for drums');
  }
  
let guess4 = prompt('Do I drive a truck?').toLowerCase();
if(guess4 === 'n' || guess4 === 'no'){
//    console.log('You are correct');
 alert('You are correct!');
  } else if(guess4 === 'y' || guess4 === 'yes'){
//    console.log('Sorry, incorrect');
    alert('Nope.. definitely driving a soccer mom SUV');
  }
  
let guess5 = prompt('Am I over 6 ft tall?').toLowerCase();
if(guess5 === 'y' || guess5 === 'yes'){
   //    console.log('You are correct');
 alert('You are correct!');
  } else if(guess5 === 'n' || guess5 === 'no'){
    //    console.log('Sorry, incorrect');
    alert('Sorry you are wrong, I am taller than some');
  }

// TODO: Display the user’s name back to them in your final message to the user.
alert(`Thanks for taking my quiz ${userName} :) `);