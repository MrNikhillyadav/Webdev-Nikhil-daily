// take a maximum number from the user 
// now take a guess from user
// show msg too low or too high accordingly
// if user types 'q' , game quits.
// if user guess it right, show them win message.

let maximum = parseInt ( prompt('Enter a maximum number'));
while (!maximum) {
    console.log ( parseInt( prompt ('Try again . Enter a valid input')));
}

const target = Math.floor (     Math.random () * maximum ) + 1;
let guess = prompt("Guess the number!");
let attempts = 1;
while(parseInt(guess) !== target){
    if(guess === 'q'){
        
        break;
    }
    if(guess> target){
        guess = prompt('TOO HIGH GUESS. Enter a new Guess');
        attempts++;
    }
    else if (guess < target){
        guess = prompt('Its too LOW. Enter a new Guess');
        attempts++;
    }
    else{
        guess = prompt('Enter a valid number or Enter q to Quit');
    }
}

if(guess === 'q'){
    console.log('You Quit');
}
if(guess === target){
    console.log('You Won'); 
}
