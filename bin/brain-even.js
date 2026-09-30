#!/usr/bin/env node
import greetUser from '../src/cli.js';
import readlineSync from 'readline-sync';
import {randomInt} from 'crypto';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const game = () => {
    let counter = 0;
    while (counter < 3) {
    let flag = "yes"
    const randomNumber = randomInt(1,1000)
    if (randomNumber % 2 === 0) {
        flag = "yes"
    } else {
        flag = "no"
    }
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ');
    if (answer === flag) {
        console.log('Correct!');
        counter++;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${flag}.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
    }
    if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
        
    }
    return game;
}
const startGame = game();