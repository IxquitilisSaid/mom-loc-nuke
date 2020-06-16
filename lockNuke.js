/**
 * Built by Jaime 'Gondola' Oliveira. 18/03/2020
 * It's free to use
 */

var fs = require('fs');

rmDir = function(dirPath) {
    try {
        var files = fs.readdirSync(dirPath);
    } catch (e) {
        console.log(e);

        return;
    }

    if (!!files.length) {
        for (var i = 0; i < files.length; i++) {
            var filePath = dirPath + '/' + files[i];

            // KEEP REQUIRED LOCALES
            // TODO: MAKE SURE WE DON'T NEED MORE. ELSE, JUST ADD THEM HERE
            if (files[i] === 'de.js' || files[i] === 'en-gb.js') {
                continue;
            }

            fs.statSync(filePath).isFile()
                ? fs.unlinkSync(filePath)
                : rmDir(filePath);
        }
    }
    //fs.rmdirSync(dirPath);
};
rmDir('node_modules/moment/locale');
