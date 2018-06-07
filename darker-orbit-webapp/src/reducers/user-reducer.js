import { ATTEMPT_LOGIN, LOGIN_STATUS_STATES } from "../actions/constants";

const initialState = {
  userDetails: {
    firstName: '',
    lastName: '',
    email: ''
  },
  loadUserStatus: 'NOT_STARTED',
  loginStatus: LOGIN_STATUS_STATES.NOT_LOGGED_IN,
  loggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ATTEMPT_LOGIN:
    return { ...state, loginStatus: LOGIN_STATUS_STATES.ATTEMPTING_LOGIN }

  default:
    return state
  }
}
