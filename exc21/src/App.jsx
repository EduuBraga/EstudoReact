import { Header } from "./components/Header"
import { Counter } from "./components/Counter"
import { createStore } from "redux"
import { CounterReducer } from "./reducers/CounterReducer"
import { Provider } from "react-redux"

export default function App() {
  const store = createStore(CounterReducer)

  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <Counter></Counter>
      </Provider>
    </div>
  )
}