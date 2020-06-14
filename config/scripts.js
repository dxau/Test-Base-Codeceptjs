const {merge} = require('mochawesome-merge');
const multipleKeys = require('./browsers').multiple;
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const {exec} = require('child_process');
const margeBin = './node_modules/.bin/marge';

module.exports = {

  // Delete old outputs on run
  bootstrapAll: function(done) {
    fs.rmdirSync('./output', {recursive: true});
    done();
  },

  // Combine reports across parrallels
  teardownAll: function(done) {
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
              if (err) {
                console.log(err);
              } else {
                exec(`${margeBin} -o ${folder} ${folder}/${file}`, (err, stdout) => {
                  if (err) {
                    console.error(`exec error: ${err}`);
                    return;
                  }
                  console.log(`${stdout}`);
                });
              }
            },
        );
        glob(`./output/${browser}*/*.png`, (err, files) => {
          if (err) {
            console.error(err);
            return;
          } else {
            for (const file of files) {
              fs.copyFile(file, `${folder}/${path.basename(file)}`, (err) => {
                if (err) throw err;
                console.log('source.txt was copied to destination.txt');
              });
            }
          }
        });
      }).catch();
    }
    done();
  },
};
