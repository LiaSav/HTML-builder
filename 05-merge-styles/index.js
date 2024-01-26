const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');
const stylesPath = path.join(__dirname, 'styles');
const stylesArray = [];

fs.readdir(stylesPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        if (file.isFile() && path.extname(file.name) === '.css') {
            const filePath = path.join(file.path, file.name);
            const readStyle = fs.createReadStream(filePath, { encoding: 'utf-8' });

            readStyle.on('data', (data) => {
                stylesArray.push(data);

                fs.writeFile(bundlePath, stylesArray.join(''), (err) => {
                    if (err) throw err;
                });
            });
        }
    });
});