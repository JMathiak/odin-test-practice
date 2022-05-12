import capitalize from "./functions.js";

test("Capitalize first letter of word", () => {
  expect(capitalize("joshua")).toBe("Joshua");
});
