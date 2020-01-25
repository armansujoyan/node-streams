const ReadableTimeStream = require('./ReadableTimeStream');
const SecondsTransformStream = require('./SecondsTransformStream');
const WriteableTimeStream = require('./WriteableTimeStream');

const readableTimeStream = new ReadableTimeStream();
const timeStreamTransformer = new SecondsTransformStream();
const writeableTimeStream = new WriteableTimeStream();

readableTimeStream.pipe(timeStreamTransformer).pipe(writeableTimeStream);