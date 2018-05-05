const initialState = {
  loading: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case 'REQUEST': {
    return {
      ...state,
      loading: true,
    }
  }
  default:
    return state
  }
}
