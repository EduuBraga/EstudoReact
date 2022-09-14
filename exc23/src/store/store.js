export const loginAction = () => { return { type: "LOGIN" } }
export const logoutAction = () => { return { type: "LOGOUT" } }

export function LoginReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return state = true
    case 'LOGOUT':
      return state = false
    default:
      return state
  }
}