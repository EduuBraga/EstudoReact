import { Aulas } from './components/Aulas'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { data } from './components/Data'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <div className="">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aulas' element={<Aulas />} />
          <Route path='/aulas/1' element={<><h1>{data[0].tittle}</h1> <p>{data[0].description}</p></>} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  )
}