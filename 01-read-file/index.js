const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const reader = fs.createReadStream(filePath, { encoding: 'utf-8' });

reader.pipe(process.stdout);