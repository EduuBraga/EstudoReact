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
    <button
      onClick={() => { dispatch( logoutAction()) }}>
      Logout
    </button> :
    <button onClick={() => { dispatch( loginAction()) }}>
      Login
    </button>
  )
}