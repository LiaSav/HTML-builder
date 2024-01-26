const fs = require('fs');
const path = require('path');

const filesCopyPath = path.join(__dirname, 'files-copy');
const filesPath = path.join(__dirname, 'files');

fs.mkdir(filesCopyPath, { recursive: true }, (err) => {
    if (err) throw err;

    fs.readdir(filesPath, { withFileTypes: true }, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
            if (file.isFile()) {
                fs.copyFile(`${file.path}\\${file.name}`, `${filesCopyPath}\\${file.name}`, (err) => {
                    if (err) throw err;
                });
            }
        });
    });
});