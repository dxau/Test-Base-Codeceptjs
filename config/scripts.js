import {merge} from 'mochawesome-merge';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import {exec} from 'child_process';

// Delete old outputs on run
export const bootstrapAll = (done) => {
  fs.rmdirSync('./output', {recursive: true});
  done();
};

// Combine reports across parrallels
export const teardownAll = (done) => {
  const multipleKeys = require('./browsers').multiple;
  for ( const browser of Object.keys(multipleKeys(1))) {
    // File and folder for report
    if (isDirSubExist('./output', browser)) {
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
  }
  done();
};

// Checks if a directory exist beginning with a certain string
const isDirSubExist = (source, substring) => {
  const folders = fs.readdirSync(source, {withFileTypes: true})
      .filter((dirent) => dirent.isDirectory() && dirent.name.startsWith(substring))
      .map((dirent) => dirent.name);
  return folders.length > 0;
};

// Uses the Marge Binary to create html report from json
const createMargeReport = (folder, file) => {
  const margeBin = './node_modules/.bin/marge';
  exec(`${margeBin} -o ${folder} ${folder}/${file}`, (err, stdout) => {
    if (err) console.error(`exec error: ${err}`);
    else console.info(`${stdout}`);
  });
};

// Copies files to specific folder
const copyFiles = (files, folder) => {
  for (const file of files) {
    fs.copyFile(file, `${folder}/${path.basename(file)}`, (err) => {
      if (err) throw err;
    });
  }
};
