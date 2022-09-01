import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

  // const [endereco, setEndereco] = useState([])
  // const url = 'https://viacep.com.br/ws/01001000/json/'

  // useEffect(() => {
  //   axios.get(url)
  //     .then(response => { setEndereco(response.data) })
  //     .catch(error => console.error(error))
  // }, [])
