export default function (state = null, action) {
  switch (action.type) {
    case 'ACTIVE_TAB':
      return action.payload;
    case 'INSERT_FORM':
      return action.payload;
    default:
      //do nothing
  }

  return state;
}