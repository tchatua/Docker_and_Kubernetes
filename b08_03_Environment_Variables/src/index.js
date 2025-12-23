// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number the server will listen on
// const port = 3000;
const port = process.env.PORT;

// Define a route handler for HTTP GET requests to the root URL "/"
// req = request object (contains request data)
// res = response object (used to send data back to the client)
app.get('/', (req, res) => {
    // Send a plain text response to the client
    res.send(`Hello from express from ${process.env.APP_NAME}`);

});


// Start the server and make it listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



