import deepFreeze from "deep-freeze";
import counterReducer from "./reducer";

describe("unicafe reducer", () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test("should return a proper initial state when called with undefined state", () => {
    const state = {};
    const action = {
      type: "DO_NOTHING",
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test("good is incremented", () => {
    const action = {
      type: "GOOD",
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });

  test("ok is incremented", () => {
    const action = {
      type: "OK",
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    });
  });

  test("bad is incremented", () => {
    const action = {
      type: "BAD",
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    });
  });

  test("good and ok are incremented", () => {
    const action1 = {
      type: "GOOD",
    };

    const action2 = {
      type: "OK",
    };

    const state = initialState;

    deepFreeze(state);
    const goodIncremented = counterReducer(state, action1);
    expect(goodIncremented).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });

    deepFreeze(goodIncremented);
    const okIncremented = counterReducer(goodIncremented, action2);
    expect(okIncremented).toEqual({
      good: 1,
      ok: 1,
      bad: 0,
    });
  });

  test("reset state", () => {
    const action1 = {
      type: "GOOD",
    };

    const action2 = {
      type: "OK",
    };

    const action3 = {
      type: "RESET",
    };

    const state = initialState;

    deepFreeze(state);
    const goodIncremented = counterReducer(state, action1);
    expect(goodIncremented).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });

    deepFreeze(goodIncremented);
    const okIncremented = counterReducer(goodIncremented, action2);
    expect(okIncremented).toEqual({
      good: 1,
      ok: 1,
      bad: 0,
    });

    deepFreeze(okIncremented);
    const resetState = counterReducer(okIncremented, action3);
    expect(resetState).toEqual({
      good: 0,
      ok: 0,
      bad: 0,
    });
  });
});
