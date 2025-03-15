// src/validator.js (Handles JSON Validation)

function validateJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  module.exports = { validateJSON };
  