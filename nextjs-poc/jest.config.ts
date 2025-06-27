import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './'
});

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['__tests__/__fixtures__'],
//     setupFilesAfterEnv: [
//     "<rootDir>/src/setupTests.ts"
//   ]
};

export default createJestConfig(config);
