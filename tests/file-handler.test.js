const fs = require('fs');
const path = require('path');
const { readFile } = require('../src/file-handler');

const mockFilePath = path.join(__dirname, 'mock.json');
const mockData = JSON.stringify({ name: "Test" }, null, 2);

beforeAll(() => fs.writeFileSync(mockFilePath, mockData)); 
afterAll(() => fs.unlinkSync(mockFilePath));

test('should read file correctly', () => {
  const data = readFile(mockFilePath);
  expect(data).toBe(mockData);
});


//writeFile test

/* test('should write file correctly', () => {
  const newFilePath = path.join(__dirname, 'output.json');
  writeFile(newFilePath, mockData);
  
  expect(fs.readFileSync(newFilePath, 'utf8')).toBe(mockData);
  
  fs.unlinkSync(newFilePath);
}); */
