module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["/node_modules/", "dist"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
};