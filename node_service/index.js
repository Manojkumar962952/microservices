const express = require('express');
const app = express();
const port = 5002;

// Simple route to return a message
app.get('/', (req, res) => {
    res.send('Hello from Service 2 (Node.js Express)!');
});

// Start the server
app.listen(port, () => {
    console.log(`Service 2 running on http://localhost:${port}`);
});
#sssss



