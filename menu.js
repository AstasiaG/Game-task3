export class menu {
    constructor (arr) {
        this.moves = [...arr];
    }

    showMenu () {
        console.log('Available moves:');
        this.moves.forEach((e,i) => console.log(`${i+1} - ${e}`));
        console.log('0 - exit');
        console.log('? - help');
    };

    showMoves (pc,user, moves) {
        console.log(`Your move: ${moves[user - 1]}`);
        console.log(`Computer move: ${pc}`);
    }
}