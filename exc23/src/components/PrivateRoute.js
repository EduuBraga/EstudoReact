import { Navigate} from "react-router-dom"
import { useSelector } from "react-redux"

export function PrivateRoute({children, redirectTo}){
  const login = useSelector(state=>state)
  
  return(login ? children : <Navigate to={redirectTo}/>)
}