////var utils  = require('course-utilities');
/*var hello = utils.load('./hello.js', 'hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("This is going to be a pass test");
});
*/

var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'greet');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello, there!");
});

test('outputs the correct string', () => {
  expect(hello("Daniela")).toBe("HELLO, DANIELA!");
});

test('outputs the correct string', () => {
  expect(hello(["Daniela", "Georgina"])).toBe("HELLO, Daniela, Georgina");
});

test('outputs the correct string', () => {
  expect(hello(["Daniela", "Georgina", "Mario"])).toBe("HELLO, Daniela, Georgina, Mario");
});