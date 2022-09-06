const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const incrementAction = (value) => { return { type: "INCREMENT", payload: value || 1 } }
const decrementAction = (value) => { return { type: "DECREMENT", payload: value } }

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
/* ---------------------------------------------- */

const addItemAction = (item) => { return { type: 'ADD_ITEM', payload: item } }

const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload]
    default:
      return state
  }
}

const allReducers = combineReducer({
  counter: counterReducer,
  list: listReducer,
})

const store = createStore(allReducers)

console.log(store.getState())
store.subscribe(() => { console.log(store.getState()) })

store.dispatch(addItemAction("Um novo item"))
store.dispatch(incrementAction(5))
store.dispatch(incrementAction(5))

