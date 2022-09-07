import { useSelector } from "react-redux"

export function Header() {
  const counter = useSelector((state) => { return state })

  return (
    <div className="header">
      <div>Contador:</div>
      <div>{counter}</div>
    </div>
  )
}