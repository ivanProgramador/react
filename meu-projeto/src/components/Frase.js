import styles from './Frase.module.css'




function Frase(){

    return(
     <div className={styles.fraseContainer}>
           <h1 className={styles.fraseContent} >Eu sou um componente com uma frase </h1>
      </div>
    )
}
export default Frase;