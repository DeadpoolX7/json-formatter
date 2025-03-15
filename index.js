
const { readFile } = require('./src/file-handler');
const {logInfo, logSuccess, logError} = require('./utility/logger');
const { formatJSON } = require('./src/formatter');
const { validateJSON } = require('./src/validator');
const yargs = require('yargs');

const argv = yargs
  .usage('Usage: $0 --file [path] --output [path] --minify')
  .option('file', {
    alias: 'f',
    describe: 'Path to the JSON file',
    demandOption: true,
    type: 'string',
  })
  .option('output', {
    alias: 'o',
    describe: 'Path to save the formatted JSON',
    type: 'string',
  })
  .option('minify', {
    alias: 'm',
    describe: 'Minify the JSON instead of formatting',
    type: 'boolean',
    default: false,
  })
  .help()
  .argv;

try {
  logInfo(`Reading file: ${argv.file}`);
  const jsonData = readFile(argv.file);
  
  if (!validateJSON(jsonData)) {
    logError('Invalid JSON data. Please provide a valid JSON file.');
    process.exit(1);
  }

  const formattedData = formatJSON(jsonData, argv.minify);
  
  if (argv.output) {
    writeFile(argv.output, formattedData);
  } else {
    console.log(formattedData);
  }
  
  logSuccess('JSON processing completed successfully.');
} catch (error) {
  logError(error.message);
  process.exit(1);
}
