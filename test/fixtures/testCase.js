const testCase1 = {
  data: {
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 1
  },
  expected: {
    totalPages: 9,
    pages: 5,
    currentPage: 1,
    firstPage: 1,
    lastPage: 5,
    previousPage: 0,
    nextPage: 2,
    hasPreviousPage: false,
    hasNextPage: true,
    totalResults: 90,
    results: 10,
    firstResult: 0,
    lastResult: 9
  }
};

const testCase2 = {
  data: {
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 0
  },
  expected: testCase1.expected
};

const testCase3 = {
  data: {
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 10
  },
  expected: {
    totalPages: 9,
    pages: 5,
    currentPage: 9,
    firstPage: 5,
    lastPage: 9,
    previousPage: 8,
    nextPage: 10,
    hasPreviousPage: true,
    hasNextPage: false,
    totalResults: 90,
    results: 10,
    firstResult: 80,
    lastResult: 89
  }
};

const testCase4 = {
  data: {
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 5
  },
  expected: {
    totalPages: 9,
    pages: 5,
    currentPage: 5,
    firstPage: 3,
    lastPage: 7,
    previousPage: 4,
    nextPage: 6,
    hasPreviousPage: true,
    hasNextPage: true,
    totalResults: 90,
    results: 10,
    firstResult: 40,
    lastResult: 49
  }
};

module.exports = {
  testCase1,
  testCase2,
  testCase3,
  testCase4
};
