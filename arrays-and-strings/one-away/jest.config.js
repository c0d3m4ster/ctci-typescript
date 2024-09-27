module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s$', // Regex for test files
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
    },
  };