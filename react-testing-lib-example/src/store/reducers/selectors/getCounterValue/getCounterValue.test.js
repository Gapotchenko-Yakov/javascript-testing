import getCounterValue from "./getCounterValue";

describe("getCounterValue", () => {
  test("mock with empty state", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("mock with filled state", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
