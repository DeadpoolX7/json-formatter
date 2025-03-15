// src/formatter.js (Handles JSON Formatting)

function formatJSON(jsonString, minify = false) {
    try {
      const jsonObj = JSON.parse(jsonString);
      return minify ? JSON.stringify(jsonObj) : JSON.stringify(jsonObj, null, 2);
    } catch (error) {
      throw new Error('Invalid JSON input');
    }
  }
  
  module.exports = { formatJSON };
  