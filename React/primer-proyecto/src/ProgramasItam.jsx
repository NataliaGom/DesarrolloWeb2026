function ProgramaConParametros(props) {
    return (
        <>
            <img src={props.url} alt={props.textoAlternativo} width={"100px"} />
            <h2>{props.nombre}</h2>
            <p>{props.plan}</p>
        </>
    );
}


function Programa({ url, textoAlternativo, nombre, plan }) {
    return ( 
        <div className="tarjeta">
            <img src={url} alt={textoAlternativo} width="200px" />
            <h2 className="titulo">{nombre}</h2>
            <p>{plan}</p>
        </div>

    );
}

export default Programa;


