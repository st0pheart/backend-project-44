import { randomInt } from "crypto";
import game from "../index.js";

const progression = () => {
    const rule = 'What number is missing in the progression?'
    const generateRound = () => {
        const start = randomInt(1,100)
        const step = randomInt(1,10)
        const result = []
        let i = 0
        const length = randomInt(5,11)
        while (result.length !== length) {
            result.push(start + i*step)
            i++;
        }
        const hidden = randomInt(0, result.length)
        const answ = result[hidden]
        result[hidden] = ".."
        
        const question = result.join(' ')
        const flag = String(answ)
        return [question,flag]
        }
        game(rule, generateRound);
}
export default progression;