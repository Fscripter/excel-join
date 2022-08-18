const InitialState = {
  idColA: null,
  idColB: null,
  done: false,
};

function verify(obj) {
  if (obj.idColA !== null && obj.idColB !== null) {
    console.log('Hey!');
  }
}
function reducer(state = InitialState, action) {
  const newState = { ...state };
  if (action.type === 'SELECTED_COL') {
    if (action.indexFile === 'A') {
      newState.idColA = action.Column;
    } else {
      newState.idColB = action.Column;
    }
    verify(newState);
    console.log(newState);
    return { ...newState };
  }
  if (action.type === 'UNSELECTED_COL') {
    if (action.indexFile === 'A') {
      newState.idColA = null;
    } else {
      newState.idColB = null;
    }
    verify(newState);
    return { ...newState };
  }

  return state;
}

export default reducer;
