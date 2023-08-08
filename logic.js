import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import _, { map } from 'underscore';
import { menu } from "./menu.js";
import { Check } from "./check.js";
import { Hmac } from "./keyGen.js";
const { createHmac } = import ('node:crypto');
const check = new Check();
const hmac = new Hmac();
const rl = readline.createInterface({ input, output });
const moves = process.argv.slice(2);
check.checkMoves(moves);
hmac.keyGen();

const pcMove = _.sample(moves);
hmac.hmacGen(pcMove);

const gameMenu = new menu(moves);
gameMenu.showMenu();

let userMove = await rl.question("Enter your move: ");
if(check.checkUserMove(userMove, moves,rl) === 'error') {
  userMove = await rl.question("Enter your move: ");
}
rl.close();

gameMenu.showMoves(pcMove, userMove, moves);

check.checkWinner(pcMove, userMove, moves); 
hmac.showKey();