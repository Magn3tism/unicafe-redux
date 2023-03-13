const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  const newState = {};
  Object.assign(newState, state);

  switch (action.type) {
    case "GOOD":
      return { ...newState, good: ++newState.good };
    case "BAD":
      return { ...newState, bad: ++newState.bad };
    case "OK":
      return { ...newState, ok: ++newState.ok };
    default:
      return state;
  }
};

export default counterReducer;
