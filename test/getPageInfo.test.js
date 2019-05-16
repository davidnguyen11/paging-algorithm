const { getPageInfo } = require('../dist');
const {
  testCase1,
  testCase2,
  testCase3,
  testCase4
} = require('./fixtures/testCase');

const { it } = global;

function compare(result, testCase) {
  const { expected } = testCase;
  expect(result.totalPages).toBe(expected.totalPages);
  expect(result.pages).toBe(expected.pages);
  expect(result.currentPage).toBe(expected.currentPage);
  expect(result.firstPage).toBe(expected.firstPage);
  expect(result.lastPage).toBe(expected.lastPage);
  expect(result.previousPage).toBe(expected.previousPage);
  expect(result.hasPreviousPage).toBe(expected.hasPreviousPage);
  expect(result.hasNextPage).toBe(expected.hasNextPage);
  expect(result.totalResults).toBe(expected.totalResults);
  expect(result.results).toBe(expected.results);
  expect(result.firstResult).toBe(expected.firstResult);
  expect(result.lastResult).toBe(expected.lastResult);
}

it('test case 1', () => {
  const { data } = testCase1;
  const pageInfo = getPageInfo(data);
  compare(pageInfo, testCase1);
});

it('test case 2', () => {
  const { data } = testCase2;
  const pageInfo = getPageInfo(data);
  compare(pageInfo, testCase2);
});

it('test case 3', () => {
  const { data } = testCase3;
  const pageInfo = getPageInfo(data);
  compare(pageInfo, testCase3);
});

it('test case 4', () => {
  const { data } = testCase4;
  const pageInfo = getPageInfo(data);
  compare(pageInfo, testCase4);
});
