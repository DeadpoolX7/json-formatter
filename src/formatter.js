// src/formatter.js (Handles JSON Formatting)

function formatJSON(jsonString, minify = false) {
    try {
      const jsonObj = JSON.parse(jsonString);
      return minify ? JSON.stringify(jsonObj) : JSON.stringify(jsonObj, null, 2);
    } catch (error) {
      throw new Error('Invalid JSON input');
    }
  }
  
  function autoSaveFormattedJSON(filePath, formattedData, overwrite = true) {
    try {
      const dir = path.dirname(filePath);
      const fileName = path.basename(filePath, '.json');
      const newFilePath = overwrite
        ? filePath
        : path.join(dir, `formatted_${fileName}.json`);
  
      fs.writeFileSync(newFilePath, formattedData, 'utf8');
      logSuccess(`✅ JSON saved at: ${newFilePath}`);
    } catch (error) {
      logError(`❌ Failed to save formatted JSON: ${error.message}`);
    }
  }

  module.exports = { formatJSON, autoSaveFormattedJSON };
  