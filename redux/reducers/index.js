import initialState from '../initialState';

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TEXT':
      return {
        ...state
      }
    case 'GET_TEXT_END':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.text,
          error: action.payload.error,
        }
      }
    default:
      return state
  }
}