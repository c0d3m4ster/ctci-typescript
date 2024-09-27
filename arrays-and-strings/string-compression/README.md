# arrays-and-strings: string-compression

cd ctci-typescript/arrays-and-strings/string-compression/
npm init -y
npm install typescript jest ts-jest @types/jest --save-dev

### Create a TypeScript Configuration File

Create a tsconfig.json file in your project directory with the following content:

`{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs", // Ensure this is set to 'commonjs'
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*", "tests/**/*"]
}`

### Configure Jest with ts-jest

You need to configure Jest to use ts-jest for transforming TypeScript files. Create a configuration file for Jest if you haven't already done so. You can create a file named jest.config.js in your project root:
jest.config.js

`module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s$', // Regex for test files
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
  },
};`

### Update Package.json Scripts

Open your package.json file and update the "scripts" section to include a test command:
`"scripts": {
  "test": "jest"
}`

### Compile TypeScript

If you want to compile TypeScript to JavaScript before running tests, you can run:

npx tsc

### Run Tests with Jest

npm test
