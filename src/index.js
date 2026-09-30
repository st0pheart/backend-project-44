import readlineSync from "readline-sync";
import greetUser from "./cli.js";

const game = (rule, generateRound) => {
  const userName = greetUser();
  let counter = 0;
  console.log(rule);
  while (counter < 3) {
    const [question, flag] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === flag) {
      console.log("Correct!");
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${flag}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
