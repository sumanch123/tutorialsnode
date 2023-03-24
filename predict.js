const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForInput() {
  const randomNumber = Math.floor(Math.random() * 100000);
  
  rl.question('Please enter a 5-digit number: ', (input) => {
    if (!/^\d{5}$/.test(input)) {
      console.log('Invalid input. Please enter a 5-digit number.');
      askForInput();
      return;
    }

    if (parseInt(input) === randomNumber) {
      console.log(`Congratulations! You guessed the random number ${randomNumber}!`);
      rl.close();
    } else {
      console.log(`Sorry, the random number was ${randomNumber}. Please try again.`);
      askForInput();
    }
  });
}


