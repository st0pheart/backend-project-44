import { randomInt } from 'crypto'
import game from '../index.js'
const gcd = () => {
    const rule = 'Find the greatest common divisor of given numbers.'
    const generateRound = () => {
        let result = 0
        let a = randomInt(1,100)
        let b = randomInt(1,100)
        const question = `${a} ${b}`
        while (b !== 0) {
                const temp = b
                b = a % b
                a = temp
            }  
        result = a;
        
        
        const flag = String(result)
        return [String(question), flag]
    }
    game(rule,generateRound);
}
export default gcd;