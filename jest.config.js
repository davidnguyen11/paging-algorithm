const ignores = ['/node_modules/', '/fixtures/'];

const testDir = ['dist/**/*.js'];

module.exports = {
  collectCoverageFrom: [...testDir],
  testMatch: ['**/test/**/*.js'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [...ignores, 'src/(umd|cjs|esm)-entry.js$'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
