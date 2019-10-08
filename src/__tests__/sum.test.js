import sum from '../sum';

describe('sum test', () => {
  test.each([
    [0, 0, 0],
    [0, -1, -1],
    [-1, 0, -1],
    [0, 1, 1],
    [1, 0, 1],
    // .....
  ])(
    '%s + %s = %s',
    (a, b, expected) => {
      expect(sum(a, b)).toStrictEqual(expected);
    },
  );
});
