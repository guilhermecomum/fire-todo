const initialState = {
  signingUp: false,
  signUpError: {},
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case 'SIGN_UP_REQUEST': {
    return {
      ...state,
      signingUp: true,
    }
  }
  case 'SIGN_UP_SUCCESS': {
    return {
      ...state,
      signingUp: false,
      currentUser: action.authUser
    }
  }
  case 'SIGN_UP_FAILURE': {
    return {
      ...state,
      signingUp: false,
      signUpError: {error: true, ...action.error}
    }
  }
  default:
    return state
  }
}
