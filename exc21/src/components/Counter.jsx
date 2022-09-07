import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from '../actions/CounterAction'

export function Counter() {
  const counter = useSelector((state) => { return state.counter })
  const dispatch = useDispatch()

  return (
    <div>
      <div>{counter}</div>
      <button type="button" onClick={() => { dispatch(incrementAction) }}>+</button>
      <button type="button" onClick={() => { dispatch(decrementAction) }}>-</button>
    </div>
  )
}