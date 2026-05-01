import { useState } from 'react'
import {Alerta} from "./components/Alerta.jsx"
import PantallaBontonConEstado from "./components/estados-react/PantallaConBoton.jsx"
import BotonOperacion from './components/estados-react/BotonOperaciones.jsx';
//import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  

  return(
    <>
    <div>
      <Alerta texto="Correcto" tipo="ok"/>
      <Alerta texto="Algo salió mal" tipo="error"/>
      <Alerta texto="Cuidado" tipo="advertencia"/>
    
    </div>
    <div>
      <PantallaBontonConEstado/>
    </div>
    <hr/>
    <div>
      <h1>{contador}</h1>
      

       <BotonOperacion
          cambiar={setContador}
          operacion="+"
          numero={10}
          texto="Sumar 10"
        />

        <BotonOperacion
          cambiar={setContador}
          operacion="-"
          numero={5}
          texto="Restar 5"
        />

        <BotonOperacion
          cambiar={setContador}
          operacion="*"
          numero={-1}
          texto="Multiplicar -1"
        />
        <BotonOperacion
          cambiar={setContador}
          operacion="+"
          numero={1}
          texto="Sumar 1"
        />
        <BotonOperacion
          cambiar={setContador}
          operacion="-"
          numero={2}
          texto="Restar 2"
        />
        
      </div>
    </>
  )
}

export default App;
