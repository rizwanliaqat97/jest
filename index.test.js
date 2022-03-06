const add = require("./index").sum;

test("Adds 2 + 2 to equal 4", () => {
  expect(add(2, 2)).toBe(4);
});
