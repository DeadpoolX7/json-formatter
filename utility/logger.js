const chalk = require('chalk');

function logInfo(message){
    console.log(chalk.blue(`ℹ️ ${message}`));
}

function logSuccess(message){
    console.log(chalk.green(`✅ ${message}`));
}

function logError(message){
    console.log(chalk.red(`❌ ${message}`));
}

module.exports = { logInfo, logSuccess, logError };