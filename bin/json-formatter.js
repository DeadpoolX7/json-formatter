// bin/json-formatter.js (Entry point)

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { formatJSON } = require('../src/formatter');
const { validateJSON } = require('../src/validator');
const { readFile, writeFile } = require('../src/file-handler');

program
  .version('1.0.0')
  .description('A CLI tool to format and validate JSON')
  .option('-f, --file <path>', 'Path to a JSON file')
  .option('-m, --minify', 'Minify the JSON output')
  .option('-v, --validate', 'Validate JSON without formatting')
  .argument('[json]', 'JSON string input')
  .action((json, options) => {
    try {
      let jsonData = json;
      
      if (options.file) {
        jsonData = readFile(options.file);
      }
      
      if (!jsonData) {
        console.error(chalk.red('❌ No JSON input provided'));
        process.exit(1);
      }
      
      if (options.validate) {
        if (validateJSON(jsonData)) {
          console.log(chalk.green('✅ JSON is valid'));
        } else {
          console.error(chalk.red('❌ Invalid JSON'));
          process.exit(1);
        }
      } else {
        console.log(formatJSON(jsonData, options.minify));
      }
    } catch (err) {
      console.error(chalk.red(`❌ Error: ${err.message}`));
      process.exit(1);
    }
  });

program.parse(process.argv);
