import React from 'react'
import { Header } from './components/Header'
import { Contador } from './components/Contador'
import { ContagemProvider } from './provider/ContagemContexto'

export function App(){
  return(
    <div>
      <ContagemProvider>
        <Header></Header>
        <Contador></Contador>
      </ContagemProvider>
    </div>
  )
}
