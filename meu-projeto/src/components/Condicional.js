
import {useState} from 'react'

function Condicional(props){
   
    const [email , setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviarEmail(e){

        e.preventDefault(e)

        setUserEmail(email)
        console.log(userEmail)
        
       

         
    }

    
    function limparEmail(e){

        e.preventDefault(e)

        setUserEmail('')
        console.log(userEmail)
        
       

         
    }
    
     return(


          <div>
              <h2>Cadastre seu e-mail</h2>
              <form>
                  <input
                    type="email"
                    placeholder="Digite seu e-mail ..."
                    onChange={(e)=>setEmail(e.target.value)}
                   />
                  <button type="submit" onClick={enviarEmail}>
                      Enviar-email

                  </button>
                  
                  {userEmail && (

                     <div>
                         <p>O e-mail do usuario é:{userEmail}</p>
                         <button onClick={limparEmail} >Limpar e-mail</button>
                     </div>
                 )}


              </form>

          </div>

     )
  

}

export default Condicional