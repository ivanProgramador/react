function Form(){
      
    
      function meuEvento(e){

          e.preventDefault()

          console.log("Cadastrado")

           
      }


   return(
         <div>
                <h1>Cadastro</h1>
                   <form onSubmit={meuEvento}>
                      <div>
                         <input type="text" placeholder="nome"/>
                      </div>

                      <div>
                         <input type="submit" value="Cadastrar"/>
                      </div>
                   </form>
         </div>

     )
}

export default Form