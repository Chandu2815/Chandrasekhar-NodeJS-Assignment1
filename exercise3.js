const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.get('/api/exercise3/pages/home', (req, res) => {
    res.status(200).setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'lib', 'home.html'));
});

app.get('/api/exercise3/pages/about', (req, res) => {
    res.status(200).setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'lib', 'about.html'));
});

app.get('/api/exercise3/pages/contact', (req, res) => {
    res.status(200).setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'lib', 'contact.html'));
});

app.listen(PORT, () => {
    console.log(`Exercise 3 running at http://localhost/api/exercise3/pages/home`);
});