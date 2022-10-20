import Item from "./Item"


function List(){

    return(

        <>
          <h2>Minha lista</h2>
          <ul>
            <Item marca="ferrari" ano_lancamento={1985}/>
            <Item marca="fiat" no_lancamento={1964}/>
            
          </ul>
        
        
        </>
    )
}

export default List