const Tarea = ({
  id,     
  texto,
  colorFondo,
  estaCompletada,    //checkbox
  completarTarea,    // funcion 
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={estaCompletada}
        onChange={() => completarTarea(id)}
      />

      <span
        style={{
          backgroundColor: colorFondo,
          textDecoration: estaCompletada ? "line-through" : "none", // tacha la tarea completada es puro adorno :) 
        }}
      >
        {texto}
      </span>
    </div>
  );
};

export default Tarea;