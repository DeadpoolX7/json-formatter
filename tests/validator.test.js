const { validateJSON } = require('../src/validator');

test('should return true for valid JSON', () => {
  const validJson = '{"name":"Valid"}';
  expect(validateJSON(validJson)).toBe(true);
});

test('should return false for invalid JSON', () => {
  const invalidJson = '{name:"Invalid"}';
  expect(validateJSON(invalidJson)).toBe(false);
});
