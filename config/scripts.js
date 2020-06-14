const {merge} = require('mochawesome-merge');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const {exec} = require('child_process');

module.exports = {

  // Delete old outputs on run
  bootstrapAll: function(done) {
    fs.rmdirSync('./output', {recursive: true});
    done();
  },

  // Combine reports across parrallels
  teardownAll: function(done) {
    const multipleKeys = require('./browsers').multiple;
    for ( const browser of Object.keys(multipleKeys(1))) {
      // File and folder for report
      const folder = `./output/${browser}`;
      const file = 'final.json';

      // Options for mochawesome merge
      const options = {
        files: [`./output/${browser}*/*.json`],
      };

      // Merge mochawsome reports
      merge(options).then((report) => {
        fs.mkdirSync(folder);
        fs.writeFile(`${folder}/${file}`, JSON.stringify(report), 'utf8',
            (err) => {
              if (err) console.error(err);
              else createMargeReport(folder, file);
            },
        );

        // Copy screenshots to final report
        glob(`./output/${browser}*/*.png`, (err, files) => {
          if (err) console.error(err);
          else copyFiles(files, folder);
        });
      }).catch();
    }
    done();
  },
};

// Uses the Marge Binary to create html report from json
createMargeReport = function(folder, file) {
  const margeBin = './node_modules/.bin/marge';
  exec(`${margeBin} -o ${folder} ${folder}/${file}`, (err, stdout) => {
    if (err) console.error(`exec error: ${err}`);
    else console.info(`${stdout}`);
  });
};

// Copies files to specific folder
copyFiles = function(files, folder) {
  for (const file of files) {
    fs.copyFile(file, `${folder}/${path.basename(file)}`, (err) => {
      if (err) throw err;
    });
  }
};
