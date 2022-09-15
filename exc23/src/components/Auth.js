import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutAction, loginAction } from "../store/store"

export function Auth() {
  const login = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(login);
  })

  return (login ?
    <button className="button__auth" onClick={() => { dispatch( logoutAction()) }}>
      Logout
    </button> :
    <button className="button__auth" onClick={() => { dispatch( loginAction()) }}>
      Login
    </button>
  )
}