
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="ivan" />
      <Pessoa nome="tiago" idade="36" profissao="vendedor" foto="https://via.placeholder.com/150" />
      <List />
    </div>

    
  );
}

export default App;
