const { formatJSON } = require('../src/formatter');

test('should format JSON properly', () => {
  const input = '{"name":"Test"}';
  const expectedOutput = '{\n  "name": "Test"\n}';
  expect(formatJSON(input, false)).toBe(expectedOutput);
});

test('should minify JSON properly', () => {
  const input = '{ "name": "Test" }';
  const expectedOutput = '{"name":"Test"}';
  expect(formatJSON(input, true)).toBe(expectedOutput);
});
