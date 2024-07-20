const square = require("./square");

describe("square", () => {
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
  });

  // Перед каждым тестом
  afterEach(() => {
    // удалить из БД
  });
  // Один раз перед всеми тестами
  afterAll(() => {});
});
