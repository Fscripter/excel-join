function selectCol(indexFile, Column = null) {
  if (Column == null) {
    return {
      type: 'UNSELECTED_COL',
      indexFile,
      Column: null,
    };
  }
  return {
    type: 'SELECTED_COL',
    indexFile,
    Column,
  };
}

export { selectCol };
