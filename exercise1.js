const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.get('/api/exercise1', (req, res) => {
    res.status(200).setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'lib', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Exercise 1 running at http://localhost/api/exercise1`);
});