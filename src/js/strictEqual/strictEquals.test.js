import strictEquals from './strictEquals.js';

test.each([
  ['test', 'test', 'test' === 'test'],
  [1, 1, 1 === 1],
  [0, -0, 0 === -0],
  ['0', -0, '0' === -0],
  [NaN, NaN, NaN === NaN],
])('%p === %p: %p', (a, b, expected) => {
  expect( strictEquals(a, b) ).toBe(expected);
});
