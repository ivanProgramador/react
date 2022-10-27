
import './App.css'
import OutraLista from './components/OutraLista'


function App() {

  const meusItens =['Vue','Angular','React']

  return (
    <div className="App">
        
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>

            

      
         
    </div>

    
  );
}

export default App;
