
import './App.css'
import {BrowserRouter as Router, Switch,Route,link} from 'react-router-dom'





function App() {

 

  return (
    <div className="App">
    
        <Router>

          <ul>
            <li>
               <Link to="/" >Home</Link>
            </li>

            <li>
               <Link to="/empresa" >Empresa</Link>
            </li>

            <li>
               <Link to="/contato" >Contato</Link>
            </li>

          </ul>

        


        </Router>

      
         
    </div>

    
  );
}

export default App;
