const { Writable } = require('stream');
const fs = require('fs');

class WriteableTimeStream extends Writable {
    constructor(options) {
        super(options);
        this._fileStream = new fs.createWriteStream('./seconds.txt', {
            encoding: options && options.defaultDecoding,
            autoClose: true
        });
        this.writeToFile = this.writeToFile.bind(this);
    }

    _write(chunk, encoding, callback) {
        this.writeToFile(chunk);
        callback();
    }

    writeToFile(chunk) {
        this._fileStream.write(chunk);
    }
}

module.exports = WriteableTimeStream;