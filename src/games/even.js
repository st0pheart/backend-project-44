import { randomInt } from "crypto";
import game from "../index.js";

const even = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRound = () => {
    const question = randomInt(1, 1000);
    const flag = question % 2 === 0 ? "yes" : "no";
    return [String(question), flag];
  };
  game(rule, generateRound);
};

export default even;
