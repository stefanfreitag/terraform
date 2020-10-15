module.exports = {
    verbose: true,
    roots: ['./test'],
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    }
  };
  