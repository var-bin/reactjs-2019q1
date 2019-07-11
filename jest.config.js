
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const PATHS = require('./buildTools/paths');

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/**/*.e2e.{js,jsx}',
    '!src/**/selectors/*.js',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    '<rootDir>/enzyme.config.js'
  ],

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/**/*.test.js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost:8080',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  modulePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/cypress',
    '<rootDir>/.cache',
    '<rootDir>/src/enhance-compose-with-dev-tools.js'
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // '^app-store(.*)$' is matched with any path started with app-store...
    '^app-components(.*)$': '<rootDir>/src/components$1',
    '^app-constants(.*)$': '<rootDir>/src/constants$1',
    '^app-store(.*)$': '<rootDir>/src/store$1',
    '^app-assets(.*)$': '<rootDir>/src/assets$1',
    '^app-mocks(.*)$': '<rootDir>/__mocks__$1'
  },

  moduleDirectories: [
    'node_modules',
    'src'
  ]
};
