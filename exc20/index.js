const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const fetch = require('cross-fetch')

const addItemAction = (item) => { return { type: "ADD_ITEM", payload: item } }

const loadItemAndAdd = ()=>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(json=>{
      dispatch(addItemAction(json))
    })
  }
}

const taskInitial = [{ id: 1, text: "Nova tarefa", completed: false }]

const listTaskReducer = (state = taskInitial, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(listTaskReducer, applyMiddleware(thunk))
store.subscribe(() => { console.log(store.getState()) })

store.dispatch(loadItemAndAdd())


