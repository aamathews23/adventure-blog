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
  moduleNameMapper: {
    '@/adventures/(.*)': '<rootDir>/components/adventures/$1',
    '@/global/(.*)': '<rootDir>/components/global/$1',
    '@/home/(.*)': '<rootDir>/components/home/$1',
    '@/layout/(.*)': '<rootDir>/components/layout/$1',
    '@/navigation/(.*)': '<rootDir>/components/navigation/$1',
    '@/types/(.*)': '<rootDir>/types/$1',
    '@/common/(.*)': '<rootDir>/common/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
