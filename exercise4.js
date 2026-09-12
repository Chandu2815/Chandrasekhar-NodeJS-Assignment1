const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Exercise 4 running at http://localhost/home.html`);
});