import { FindRegex } from "./chapter3/findRegex.js";

const findRegexInstance = new FindRegex(/hello \w+/g);

findRegexInstance
    .addFile('./chapter3/file1.txt')
    .addFile('./chapter3/file2.txt')
    .find()
    .on('found', (file, match) => {
        console.log(`Matched "${match}" in file ${file}`);
    })
    .on('error', (err) => {
        console.error(`Error emitted: ${err.message}`);
    })