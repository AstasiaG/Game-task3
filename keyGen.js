const crypto = await import('node:crypto');
const { generateKeySync } = import ('node:crypto');
const { createHmac } = await import('node:crypto');

export class Hmac {
    keyGen () {
        this.key = crypto.generateKeySync('hmac', { length: 256 }).export().toString('hex');
    }

    hmacGen (pcMove) {
        this.hmac = createHmac('sha256', this.key)
            .update(pcMove)
            .digest('hex');
        console.log(`HMAC: ${this.hmac}`);
    }

    showKey () {
        console.log(`HMAC key: ${this.key}`);
    }
}