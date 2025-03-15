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

module.exports = { readFile };
