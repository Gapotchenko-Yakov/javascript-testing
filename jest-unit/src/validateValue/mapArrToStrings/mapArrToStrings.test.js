const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
  test("Корректное значение", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Массив элементов с разными типами", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, "asd"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("Пустой массив", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test("Отрицание", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
