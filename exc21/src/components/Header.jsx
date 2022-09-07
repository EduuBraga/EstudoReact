import { useSelector } from "react-redux"

export function Header() {
  const counter = useSelector((state) => { return state.counter })

  return (
    <div className="header">
      <div>Contador:</div>
      <div>{counter}</div>
    </div>
  )
}