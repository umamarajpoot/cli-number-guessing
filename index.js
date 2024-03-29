import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 9);
console.log(randomNumber);
const answers = await inquirer.prompt([
    { name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 19-4 : ",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guess right number.");
}
else {
    console.log("you guessed wrong number");
}
