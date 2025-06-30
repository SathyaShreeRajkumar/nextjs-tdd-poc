import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './'
});

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['__tests__/__fixtures__'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    }
};

export default createJestConfig(config);
