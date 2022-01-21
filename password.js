const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userName = undefined;


reader.question("Hello there,Please enter your name: ", function(userName) {
    console.log(`Welcome ${userName}!`);


    reader.question("What is your password: ", function(answer){
      if (answer.length === 0)
      {
        console.log("Nothing was entered");
      }
      else if (answer.length < 10 && answer.length >= 1)
      {
        console.log("Not enough characters(must be 10 or higher).");
      }
      else
      {
        console.log("Password entered correctly");
      }

      reader.close();
    });
});


