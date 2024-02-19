
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpeg)$':'./src/__test__/__mocks__/fileMock.js',
    '^@app/(.*)$': './src/$1',
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  collectCoverge:false,
  collectCoverageFrom:["src/**/*.{js,jsx}"],
  coverageDirectory:"coverage",
  setupFilesAfterEnv: ['./jest.setup.js'], 
  
}