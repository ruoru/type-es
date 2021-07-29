const a = 1;
import { typeIs, isNumber, isStringNumber, transformStringNumber, thousandsNumber, isMoney } from '../src/index';

// typeIs
test(`typeIs false`, () => {
  expect(typeIs(false)).toBe('boolean');
});

test(`typeIs ''`, () => {
  expect(typeIs('')).toBe('string');
});

test(`typeIs 0`, () => {
  expect(typeIs(0)).toBe('number');
});

test(`typeIs NaN`, () => {
  expect(typeIs(NaN)).toBe('number');
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


// isNumber
test(`isNumber '123'`, () => {
  expect(isNumber('123')).toBe(false);
});

test(`isNumber NaN`, () => {
  expect(isNumber(NaN)).toBe(false);
});

test(`isNumber .123`, () => {
  expect(isNumber(.123)).toBe(true);
});


// isStringNumber
test(`isStringNumber ''`, () => {
  expect(isStringNumber('')).toBe(false);
});

test(`isStringNumber .123`, () => {
  expect(isStringNumber(.123)).toBe(true);
});

test(`isStringNumber .1223f`, () => {
  expect(isStringNumber('.1223f')).toBe(true);
});

test(`isStringNumber 1223f true`, () => {
  expect(isStringNumber('1223f', true)).toBe(false);
});

test(`isStringNumber .1223 true`, () => {
  expect(isStringNumber('.1223', true)).toBe(true);
});


// transformStringNumber
test(`transformStringNumber ''`, () => {
  expect(transformStringNumber('')).toBe(undefined);
});

test(`transformStringNumber .123`, () => {
  expect(transformStringNumber(.123)).toBe(0.123);
});

test(`transformStringNumber .1223f`, () => {
  expect(transformStringNumber('.123f')).toBe(0.123);
});

test(`transformStringNumber 1223f true`, () => {
  expect(transformStringNumber('1223f', true)).toBe(undefined);
});

test(`transformStringNumber 1223f true --`, () => {
  expect(transformStringNumber('1223f', true, '--')).toBe('--');
});

test(`transformStringNumber .1223 true`, () => {
  expect(transformStringNumber('.1223', true)).toBe(0.1223);
});


// thousandsNumber
test(`thousandsNumber ''`, () => {
  expect(thousandsNumber('')).toBe(undefined);
});

test(`thousandsNumber 12123f`, () => {
  expect(thousandsNumber('12123f')).toBe('12,123');
});

test(`thousandsNumber 1223f true`, () => {
  expect(thousandsNumber('1223f', true)).toBe(undefined);
});

test(`thousandsNumber 1223f true --`, () => {
  expect(thousandsNumber('1223f', true, '--')).toBe('--');
});

test(`thousandsNumber 1111.1223 true`, () => {
  expect(thousandsNumber('1111.1223', true)).toBe('1,111.1223');
});


// isMoney
test(`isMoney '.123'`, () => {
  expect(isMoney('.123')).toBe(false);
});

test(`isMoney '.12'`, () => {
  expect(isMoney('.12')).toBe(true);
});

test(`isMoney 123`, () => {
  expect(isMoney(123)).toBe(true);
});

test(`isMoney '123.'`, () => {
  expect(isMoney('123.')).toBe(false);
});

test(`isMoney '0'`, () => {
  expect(isMoney('0')).toBe(true);
});


// test('edgesetArray_adjacencyMatrix index', () => {
//   const { matrix: value } = edgesetArray_adjacencyMatrix(nodes, relationsIndex, { beginId: 'beginIndex', endId: 'endIndex' });
//   expect(value).toEqual(resultMatrix);
// });