const redux = require('redux')
const createStore = redux.createStore

const incrementAction = (value)=>{ return{ type: "INCREMENT", payload: value || 1}}
const decrementAction = { type: "DECREMENT" }

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer)
console.log(store.getState())
store.subscribe(()=>{console.log(store.getState())})

store.dispatch(incrementAction())
store.dispatch(incrementAction(5))
store.dispatch(incrementAction(5))
