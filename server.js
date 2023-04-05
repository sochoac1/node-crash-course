// Require core module
const http = require('http');

//Method to create a server
/**
 * Store the instance of the server
 * Used for WebSockects
 * Callback function is gonna run every time a request comes in to our server (Ex: requesr home page)
 * Inside callback function we get access to two different objects
 * 1. Request object: full information about the request (URL being requested)
 * 2. Respond object: We use to send the respond to the user
 * It's not actively listening for requests being sent to do that we have to invoke the listen method
 */
const server = http.createServer((req, res) => {
    console.log('Request made');
});     

/**
 * Port
 * Host -> Ip Address
 * Callback, function fires when we start listening
 */
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})