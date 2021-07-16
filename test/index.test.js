import {
  typeIs
} from '../src/index';

test(`typeIs false`, () => {
  expect(typeIs(false)).toBe('boolean');
});

test(`typeIs ''`, () => {
  expect(typeIs('')).toBe('string');
});

test(`typeIs 123`, () => {
  expect(typeIs(0)).toBe('number');
});

test(`typeIs null`, () => {
  expect(typeIs(null)).toBe('null');
});

test(`typeIs undefined`, () => {
  expect(typeIs(undefined)).toBe('undefined');
});

test(`typeIs []`, () => {
  expect(typeIs([])).toBe('array');
});

test(`typeIs {}`, () => {
  expect(typeIs({})).toBe('object');
});

test(`typeIs function`, () => {
  expect(typeIs(() => { })).toBe('function');
});

test(`typeIs function`, () => {
  expect(typeIs(function () { })).toBe('function');
});

// test('edgesetArray_adjacencyMatrix index', () => {
//   const { matrix: value } = edgesetArray_adjacencyMatrix(nodes, relationsIndex, { beginId: 'beginIndex', endId: 'endIndex' });
//   expect(value).toEqual(resultMatrix);
// });
