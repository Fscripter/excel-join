import { stat } from 'fs';

const InitialState = {
  fileA: null,
  fileB: null,
  done: false,
};

function verify(obj) {
  if (obj.fileA !== null && obj.fileB !== null) {
    console.log('Hey!');
  }
}
function reducer(state = InitialState, action) {
  const newState = { ...state };
  if (action.type === 'FILE_UPLOADED') {
    if (action.id === 'A') {
      newState.fileA = action.data;
    } else {
      newState.fileB = action.data;
    }
    verify(newState);
    console.log(newState);
    return { ...newState };
  }
  if (action.type === 'FILE_DELETED') {
    if (action.id === 'A') {
      newState.fileA = null;
    } else {
      newState.fileB = null;
    }
    verify(newState);
    return { ...newState };
  }

  return state;
}

export default reducer;
