import Button from './evento/Button'

function Evento(){


    function meuEvento(){

        console.log('Opa, fui ativado');
    }


    return(

        <div>
             <p>Clique para disparar um evento</p>
             <Button event={meuEvento} text="primeiro evento"/>
         
        </div>

    )
}

export default Evento