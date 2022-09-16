import { useDispatch, useSelector } from "react-redux"
import { logoutAction, loginAction } from "../store"

export function AuthButton() {
  const login = useSelector(state => state)
  const dispatch = useDispatch()

  return (login ?
    <button className="button__auth" onClick={() => { dispatch( logoutAction()) }}>
      Logout
    </button> :
    <button className="button__auth" onClick={() => { dispatch( loginAction()) }}>
      Login
    </button>
  )
}