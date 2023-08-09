import { Console } from 'node:console'
import { Transform } from 'node:stream'

export class Help {
    createTable (moves) {
        this.help = [];
        const li = (moves.length - 1) / 2;
        for(let i = 0; i< moves.length ;i++) {
            this.help.push({'v pc/user >': moves[i]});
            for(let k = 0; k< moves.length ;k++) {
                if(moves[k] === this.help[i]['v pc/user >']) {
                    this.help[i][moves[k]] = 'Draw';
                } else if (moves[k-1] === this.help[i]['v pc/user >'] || moves[k-li] === this.help[i]['v pc/user >'] || moves[k+li*2] === this.help[i]['v pc/user >'] || moves[k+(li*2-1)] === this.help[i]['v pc/user >']) {
                    this.help[i][moves[k]] = 'Win';
                } else if (moves[k+1] === this.help[i]['v pc/user >'] || moves[k+li] === this.help[i]['v pc/user >'] || moves[k-li*2] === this.help[i]['v pc/user >'] || moves[k-(li*2-1)] === this.help[i]['v pc/user >']){
                    this.help[i][moves[k]] = 'Lose';
                }
            }
        }
    }

    showHelp() {
        console.log('');
        const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } })
        const logger = new Console({ stdout: ts })
        logger.table(this.help);
        const table = (ts.read() || '').toString();
        let result = '';
        for (let row of table.split(/[\r\n]+/)) {
            let r = row.replace(/[^┬]*┬/, '┌');
            r = r.replace(/^├─*┼/, '├');
            r = r.replace(/│[^│]*/, '');
            r = r.replace(/^└─*┴/, '└');
            r = r.replace(/'/g, ' ');
            result += `${r}\n`;
        };
        console.log(result);
    }
}
