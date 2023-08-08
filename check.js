import process from 'node:process';

export class Check {
  checkMoves (moves) {
    if(moves.length % 2 === 0 || moves.length < 3) {
      console.log('Error! Please enter an odd number of parameters equal to 3 or more');
      process.exit(0);
   }
  }

  checkUserMove (user, moves, rl) {
    if(user > moves.length + 1) {
      console.log('Please select one of the suggested values');
      return 'error';
    } else if (user == 0) {
      console.log('Exit game');
      process.exit(0);
    }
  }

  checkWinner (pc, user, moves) {
    const n = moves.length - 1;
    let pcMove = moves.indexOf(pc);
    let userMove = (user - 1);
    if(pcMove >= userMove - n/2 && !(userMove <= pcMove) || userMove === 0 && pcMove > userMove + n/2) {
      return console.log('Computer win!');
    } else if (userMove == pcMove) {
      return console.log('Draw!');
    } else if (pcMove >= userMove + n/2 || userMove === 7 && pcMove < userMove - n/2){
      return console.log('You win!');
    }
  }
}