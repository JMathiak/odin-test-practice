import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

test("Capitalize first letter of word", () => {
  expect(capitalize("joshua")).toBe("Joshua");
});

test("Reverse String", () => {
  expect(reverseString("Zenyatta")).toBe("attayneZ");
});

test("Add", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Subtract", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("Divide", () => {
  expect(calculator.divide(15, 3)).toBe(5);
});

test("Multiply", () => {
  expect(calculator.multiply(23, 3)).toBe(69);
});

test("Caesar Cipher: Happy", () => {
  expect(caesarCipher("inrg")).toBe("josh");
});

test("Caesar Cipher: Wrapping", () => {
  expect(caesarCipher("wxyz")).toBe("xyza");
});

test("Caesar Cipher: Punctuation", () => {
  expect(caesarCipher("w.x.y.z.")).toBe("x.y.z.a.");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
