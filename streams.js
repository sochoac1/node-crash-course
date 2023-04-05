const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')
/**
 * This is an event listener (Ex: button adn we listen to a click event)
 * We are listening to a data event
 * Every time we receive a buffer of data from this stream (chunk of data) that we can use it
 * Every time that we get a new chunk of data we fire this callback function and we get access to that chunk of data.
 */
readStream.on('data', (chunk) => {
    console.log('--- NEW CHUNK ---');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK \n');
    writeStream.write(chunk);
})

// Pipe - Every time we get a chunk under the hood its piping that into the write streams
readStream.pipe(writeStream);

