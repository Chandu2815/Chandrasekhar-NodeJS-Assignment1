const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;

app.get('/api/exercise2', (req, res) => {
    const filePath = path.join(__dirname, 'lib', 'users.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).setHeader('Content-Type', 'text/html');
            return res.send('<h1>Error reading file</h1>');
        }

        const lines = data.trim().split('\n').map(line => line.trim()).filter(line => line.length > 0);
        let tableHtml = '<table border="1">\n';

        lines.forEach((line, index) => {
            const columns = line.split('|').map(col => col.trim());
            tableHtml += '  <tr>\n';
            columns.forEach(col => {
                if (index === 0) {
                    tableHtml += `    <th>${col}</th>\n`;
                } else {
                    tableHtml += `    <td>${col}</td>\n`;
                }
            });
            tableHtml += '  </tr>\n';
        });

        tableHtml += '</table>';

        res.status(200).setHeader('Content-Type', 'text/html');
        res.send(tableHtml);
    });
});

app.listen(PORT, () => {
    console.log(`Exercise 2 running at http://localhost/api/exercise2`);
});