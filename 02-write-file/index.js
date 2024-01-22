const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'text.txt');

fs.writeFile(filePath, '', (err) => {
    if (err) throw err;
    console.log('Welcome!');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (text) => {
        fs.appendFile(filePath, text + '\n', (err) => {
            if (err) throw err;
        });
    });

    process.on('exit', () => console.log('Good luck learning Node.js!'));
});
