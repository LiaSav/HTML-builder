const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'secret-folder');

fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        if (file.isFile()) {
            const fileName = file.name.split('.').slice(0, 1).join('');
            const fileExt = (path.extname(file.name.toString()).slice(1));

            fs.stat(`${file.path}\\${file.name}`, (err, stats) => {
                if (err) throw err;
                console.log(`${fileName} - ${fileExt} - ${stats.size}`);
            });
        }
    });
});
