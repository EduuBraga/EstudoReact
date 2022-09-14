import { Aulas } from './components/Aulas'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Aula } from './components/Aula'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <div className="">
        <Header></Header>
        <Routes>
          <Route path='*' element={<h1>Página não encontrada, tente novamente</h1>} />
          <Route path='/' element={<Home />} />
          <Route path='/aulas' element={<Aulas />} />
          <Route path='/aulas/:id' element={<Aula />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  )
}