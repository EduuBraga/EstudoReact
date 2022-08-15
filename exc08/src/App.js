import Header from './Header.js';
import Contador from './Contador.js'
import './App.css';

function App() {
  return (
    <div>
      <Header nome="ColdDev" links={['Sobre', 'comprar', 'Contato']}></Header>
      <Contador numero={7}></Contador>
    </div>
  );
}

export default App;
