function Hide() {
  console.log('Calling');
  return {
    type: 'HIDE_LOADING',
    time: new Date(),
  };
}

export { Hide };
