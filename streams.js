const {
    ReadableTimeStream,
    SecondsTransformStream,
    WriteableTimeStream
} = require('./TimeStreams')

const readableTimeStream = new ReadableTimeStream();
const timeStreamTransformer = new SecondsTransformStream();
const writeableTimeStream = new WriteableTimeStream();

readableTimeStream.pipe(timeStreamTransformer).pipe(writeableTimeStream);