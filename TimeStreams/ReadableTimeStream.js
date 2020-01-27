const { Readable } = require('stream');

class ReadableTimeStream extends Readable {
    constructor(options) {
        super(options);
        this.emitCurrentSecond = this.emitCurrentSecond.bind(this);
    }

    _read() {
        setTimeout(this.emitCurrentSecond, 1000);
    }

    emitCurrentSecond() {
        const timeBuffer = Buffer.from(`${Date.now()}`);
        this.push(timeBuffer)
    }
}

module.exports = ReadableTimeStream