const square = require("./square");

describe.skip("square", () => {
  let mockValue;
  // Перед каждым тестом
  beforeEach(() => {});
  // Один раз перед всеми тестами
  beforeAll(() => {});

  test("Корректное значение", () => {
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Число вызовов для 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  // Перед каждым тестом
  afterEach(() => {
    // удалить из БД
    jest.clearAllMocks();
  });
  // Один раз перед всеми тестами
  afterAll(() => {});
});
