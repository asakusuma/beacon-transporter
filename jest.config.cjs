module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '__tests__/tsconfig.json',
    },
  },
  testTimeout: 30_000,
};
