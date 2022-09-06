const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const {increment, decrement} = require('./actions/counterAction')
const counterReducer = require("./reducers/counterReducer")

/* ---------------------------------------------- */

const addItemAction = require("./actions/listAction")
const listReducer = require("./reducers/listReducer")

const allReducers = combineReducer({
  counter: counterReducer,
  list: listReducer,
})

const store = createStore(allReducers)

console.log(store.getState())
store.subscribe(() => { console.log(store.getState()) })

store.dispatch(addItemAction("Novo item"))

store.dispatch(increment(5))
store.dispatch(decrement(5))

