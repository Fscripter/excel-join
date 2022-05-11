function loading() {
  return {
    type: 'LOADED',
    confirm: true,
  };
}
function Next(step) {
  return {
    type: 'NEXT',
    step,
  };
}
function Back(step) {
  return {
    type: 'BACK',
    step,
  };
}
export { loading, Next, Back };
