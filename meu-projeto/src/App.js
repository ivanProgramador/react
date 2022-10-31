
import './App.css'
import { useState } from 'react'
import SeuNome from './components/SeuNome';

const [nome,setNome] = useState()

function App() {

  

  return (
    <div className="App">
      <h2>State Lift</h2>

      <SeuNome setNome={setNome}/>
        

      
         
    </div>

    
  );
}

export default App;
