const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'text.txt');

fs.writeFile(filePath, 'Hello', (err) => {
    if (err) throw err;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (text) => {
        fs.appendFile(filePath, '\n' + text, (err) => {
            if (err) throw err;
        });
    });

    rl.on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
})
