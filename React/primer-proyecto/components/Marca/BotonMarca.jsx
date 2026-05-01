function BotonMarca({texto, tipo}){
    const colorFondo = tipo == "primario" ? "purple" : "white";
    const colorTexto = tipo == "primario" ? "white" : "black";

    return(
        <button style={{ backgroundColor: colorFondo, color: colorTexto}}>
            {texto}
        </button>
    )
}