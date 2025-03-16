const { readFile, writeFile } = require('./src/file-handler');
const { logInfo, logSuccess, logError } = require('./utility/logger');
const { formatJSON } = require('./src/formatter');
const { validateJSON } = require('./src/validator');
const path = require('path');
const yargs = require('yargs');

const argv = yargs
  .usage('Usage: $0 --file [path] --output [path] --minify --overwrite')
  .option('file', {
    alias: 'f',
    describe: 'Path to the JSON file',
    demandOption: true,
    type: 'string',
  })
  .option('output', {
    alias: 'o',
    describe: 'Path to save the formatted JSON (default: formatted_<filename>.json)',
    type: 'string',
  })
  .option('minify', {
    alias: 'm',
    describe: 'Minify the JSON instead of formatting',
    type: 'boolean',
    default: false,
  })
  .option('overwrite', {
    alias: 'w',
    describe: 'Overwrite the original JSON file',
    type: 'boolean',
    default: false,
  })
  .help()
  .argv;

try {
  logInfo(`📂 Reading file: ${argv.file}`);
  const jsonData = readFile(argv.file);

  if (!validateJSON(jsonData)) {
    logError('❌ Invalid JSON data. Please provide a valid JSON file.');
    process.exit(1);
  }

  const formattedData = formatJSON(jsonData, argv.minify);

  let outputFilePath = argv.output;
  
  if (!outputFilePath) {
    if (argv.overwrite) {
      outputFilePath = argv.file;
    } else {
      const dir = path.dirname(argv.file);
      const fileName = path.basename(argv.file, '.json');
      outputFilePath = path.join(dir, `formatted_${fileName}.json`);
    }
  }

  writeFile(outputFilePath, formattedData);
  logSuccess(`✅ JSON successfully saved at: ${outputFilePath}`);
} catch (error) {
  logError(error.message);
  process.exit(1);
}
