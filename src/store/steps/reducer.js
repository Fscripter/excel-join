const initialState = {
  steps: 0,
};
function reducer(state = initialState, action) {
  const newState = { ...state };
  if (action.type === 'NEXT_STEP') {
    if (newState.steps < 3) {
      newState.steps += 1;
    }
    return newState;
  }
  return state;
}

export default reducer;
