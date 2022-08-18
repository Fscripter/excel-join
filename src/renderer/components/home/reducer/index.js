const initialState = {
  loaded: false,
  stepNumber: 1,
};
const maxStep = 4;

function reducer(state = initialState, action) {
  if (action.type === 'LOADED') {
    return {
      ...state,
      loaded: true,
    };
  }
  if (action.type === 'NEXT') {
    if (state.stepNumber < maxStep) {
      const copyState = state.slice();
      copyState.stepNumber++;
      return {
        ...copyState,
      };
    }
  }

  return state;
}

export default reducer;
