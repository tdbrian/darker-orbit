import { ATTEMPT_LOGIN } from './constants'

export const attemptLogin = payload => ({
  type: ATTEMPT_LOGIN,
  payload
})
