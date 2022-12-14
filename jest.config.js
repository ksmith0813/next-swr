// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: ['html', 'text'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/__mocks__/',
    '<rootDir>/__tests__/jest.setup.ts',
    '<rootDir>/__tests__/router.ts',
    '(<rootDir>/__tests__/.*|(\\.|/))(mock)\\.[jt]sx?',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
