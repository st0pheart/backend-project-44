import { randomInt } from "crypto";
import game from "../index.js";

const calc = () => {
  const rule = "What is the result of the expression?";
  const generateRound = () => {
    const a = randomInt(1, 25);
    const b = randomInt(1, 25);
    const op = ["+", "-", "*"];
    const randomOp = op[randomInt(0, 3)];
    let result = 0;
    switch (randomOp) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      default:
        break;
    }
    const question = `${a} ${randomOp} ${b}`;
    const flag = String(result);
    return [question, flag];
  };
  game(rule, generateRound);
};

export default calc;
