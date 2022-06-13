const suma = require('./suma');

test('2 + 5 = 7', () => {
  expect(suma(2, 5)).toBe(7);
});

test('a + 5 = a5', () => {
  expect(suma('a', 5)).toBe('a5');
});
