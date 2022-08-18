const initialState = {
  load: true,
};

function reducer(state = initialState, action) {
  console.log(action.type);
  if (action.type === 'HIDE_LOADING') {
    return {
      ...state,
      load: false,
    };
  }
  return state;
}

export default reducer;
