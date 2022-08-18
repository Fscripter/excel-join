const InitialState = {
  operation: null,
};

function verify(obj) {
  if (obj.operation !== null) {
    console.log('Hey!');
  }
}
function reducer(state = InitialState, action) {
  const newState = { ...state };
  if (action.type === 'UNSELECTED_JOIN') {
    newState.operation = null;
    verify(newState);
    return { ...newState };
  }
  if (action.type === 'SELECTED_JOIN') {
    newState.operation = action.operation;
    verify(newState);
    return { ...newState };
  }

  return state;
}

export default reducer;
