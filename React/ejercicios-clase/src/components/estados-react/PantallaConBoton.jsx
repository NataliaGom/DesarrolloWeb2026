import { useState } from "react";

const BotonContador = () => {
    let contador = 0;

    return(
        <div>
           <button onClick={() =>{
            contador = contador +1;
           }}>
            Botón
            </button> 
            <br>
            {contador}
            </br>
        </div>
    );
}

const PantallaBontonConEstado = () => {
    const [contador, setContador] = useState(0);

    return(
        <div>
            <h1> Botón contador y estado</h1>
           <button onClick={() =>{
            //setContador(contador + 1);
            setContador((contadorAnterior) => contadorAnterior +1);
           }}>
            Botón
            </button> 
            <br/>
            {contador}
        </div>
    );
}

export default PantallaBontonConEstado;