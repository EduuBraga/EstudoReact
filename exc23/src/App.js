import { Aulas } from './components/Aulas'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Aula } from './components/Aula'
import { PrivateRoute } from './components/PrivateRoute'
import {Negado} from './components/Negado'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { LoginReducer } from './store/store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(LoginReducer)

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="">
          <Header></Header>
          <Routes>
            <Route path='*' element={<h1>Página não encontrada, tente novamente</h1>} />
            <Route path='/' element={<Home />} />
            <Route path='/aulas' element={<PrivateRoute redirectTo='/negado'> <Aulas /> </PrivateRoute>} />
            <Route path='/negado' element={<Negado />} />
            <Route path='/aulas/:id' element={<Aula />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}