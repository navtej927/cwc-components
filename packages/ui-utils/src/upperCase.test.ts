import { upperCase } from './upperCase';

describe("upperCase", () => {
  it("should be a function", () => {
    expect(upperCase).toBeDefined();
    expect(typeof upperCase).toBe("function");
  })

  it("should uppercase the passed value", () => {
    const str = "abcd";
    const result = "ABCD";
    expect(upperCase(str)).toBe(result);
  })
});