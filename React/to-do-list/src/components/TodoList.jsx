import { useState } from "react";
import Tarea from "./Tarea.jsx";

const TodoList = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: "Leer para ideas",
      colorFondo: "lightblue",
      estaCompletada: false,
    },
    {
      id: 2,
      texto: "Hacer tarea de SO",
      colorFondo: "lightgreen",
      estaCompletada: false,
    },
    {
      id: 3,
      texto: "Pasear a los perros",
      colorFondo: "lightpink",
      estaCompletada: true,
    },
    {
      id: 4,
      texto: "Lavar la ropa",
      colorFondo: "yellow",
      estaCompletada: false,
    },
  ]);

  const completarTarea = (id_revisar) => {
    const nuevasTareas = tareas.map((tarea) => {   //map hace el nuevo arreglo para no dañar el original 
      if (tarea.id === id_revisar) {
        return {
          ...tarea,   //copia las propiedades de la tarea como vimos en clase 
          estaCompletada: !tarea.estaCompletada,  //invierte el TRUE A FALSE y viceversa. 
        };
      }
      return tarea;
    });

    setTareas(nuevasTareas); //update del nuevo arreglo
  };

  return (
    <div>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          colorFondo={tarea.colorFondo}
          estaCompletada={tarea.estaCompletada}
          completarTarea={completarTarea}
        />
      ))}
    </div>
  );
};

export default TodoList;