function selectJoin(operation = null) {
  if (operation == null) {
    return {
      type: 'UNSELECTED_JOIN',
      operation: null,
    };
  }
  return {
    type: 'SELECTED_JOIN',
    operation,
  };
}

export default selectJoin;
