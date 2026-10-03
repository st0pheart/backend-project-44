import { randomInt } from 'crypto'
import game from '../index.js'
const prime = () => {
    const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
    const generateRound = () => {
    const count = randomInt(1,1000)
    let prime = 'yes'
    if (count < 2 || count % 2 === 0) {
        prime = 'no';
    }
    if (count === 2) {
        prime = 'yes';
    }
    for (let i = 3; i <= Math.sqrt(count); i++) {
        if (count % i=== 0) {
            prime = 'no'
            break;
        }
    }
    const question = String(count)
    const flag = prime
    return [question,flag]
}
game (rule, generateRound);
}
export default prime;