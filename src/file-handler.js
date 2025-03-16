// src/file-handler.js (Handles File Operations)

const fs = require('fs');
const path = require('path');

function readFile(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    return fs.readFileSync(absolutePath, 'utf8');
  } catch (error) {
    throw new Error(`Failed to read file: ${filePath}`);
  }
}

function writeFile(filePath, data) {
  try {
    const absolutePath = path.resolve(filePath);
    fs.writeFileSync(absolutePath, data, 'utf8');
    logSuccess(`File saved: ${absolutePath}`);
  } catch (error) {
    logError(`Failed to write file: ${filePath}`);
    throw new Error(`Failed to write file: ${filePath}`);
  }
}

module.exports = { readFile, writeFile };
