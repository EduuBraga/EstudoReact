import './App.css';
import Contador from './Contador.js'
import React, {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(true)

  setTimeout(()=>{
    // setVisible(false)
  }, 5000)

  return (
    <div>
      {visible && <Contador />}
    </div>
  );
}

export default App;
