import { FindRegex } from "./chapter3/findRegex.js";

const findRegexInstance = new FindRegex(/hello \w+/g);

findRegexInstance
    .addFile('./chapter3/file1.txt')
    .addFile('./chapter3/file2.txt')
    .on('finish', (count, matchCount) => {
        console.log(`Processing ended. ${count} files processed with ${matchCount} matches found.`);
    }).on('reading', (count, fileList) => {
        console.log(`Reading file ${count} of ${fileList.length}`);
    }).on('found', (file, match) => {
        console.log(`Matched "${match}" in file ${file}`);
    }).on('error', (err) => {
        console.error(`Error emitted: ${err.message}`);
    })
    .find()