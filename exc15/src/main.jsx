import React from 'react'
import ReactDOM from 'react-dom/client'
import { UsuarioProvider } from './provider/UsuarioContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </React.StrictMode>
)
