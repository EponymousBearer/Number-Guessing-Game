import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random() * 10);
const i = 0;
for (let i = 0; i < 3; i++) {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Guess Any Number Between 0 to 10: "
        }
    ]);
    const { userGuess } = answers;
    console.log("Your Guess is ", userGuess);
    if (userGuess === systemGeneratedNo) {
        console.log("Yesss! Your answer is correct");
        break;
    }
    else {
        console.log("Please try again luck next time!");
    }
    ;
}
console.log("The answer is ", systemGeneratedNo);
