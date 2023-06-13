import { useState } from "react"
import styles from './button.module.css'


export default function MeuContador(){    

    const [contador, setcontador] = useState(0)

    function aumentar () {
        setcontador(contador+1)
    }

    return (
        <div className='container'>
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <button className={styles.myBotton} onClick={aumentar} >Aumentar</button>
        </div>
    ) 
}