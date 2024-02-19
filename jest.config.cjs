
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpeg)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    '^@app/(.*)$': '<rootDir>/$1',
  },
  collectCoverge:false,
  collectCoverageFrom:["src/**/*.{js,jsx}"],
  coverageDirectory:"coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 
  
}