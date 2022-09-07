import { Header } from "./components/Header"
import { Counter } from "./components/Counter"
import { createStore, combineReducers } from "redux"
import { CounterReducer } from "./reducers/CounterReducer"
import { Provider } from "react-redux"

export default function App() {
  const allReducers = combineReducers({counter: CounterReducer})
  const store = createStore(allReducers)

  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <Counter></Counter>
      </Provider>
    </div>
  )
}