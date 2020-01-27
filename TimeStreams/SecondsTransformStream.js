const { StringDecoder } = require('string_decoder');
const { Transform } = require('stream');
const moment = require('moment');

class SecondsTransformStream extends Transform {
    constructor(options) {
        super(options);
        this._decoder = new StringDecoder(options && options.defaultDecoding);
        this.formatDate = this.formatDate.bind(this);
    }

    _transform(chunk, encoding, callback) {
        this.formatDate(chunk);
        callback();
    }

    formatDate(chunk) {
        const decodedDate = this._decoder.write(chunk);
        const formattedDate = moment(decodedDate, "x")
            .format("DD MMM YYYY hh:mm:ss a")
            .toString() + '\n';
        this.push(Buffer.from(formattedDate));
    }
}

module.exports = SecondsTransformStream;