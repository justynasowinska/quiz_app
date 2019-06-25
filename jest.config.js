module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    setupFiles: ['<rootDir>/setup.js'],
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    cacheDirectory: '.jest/cache',
};
