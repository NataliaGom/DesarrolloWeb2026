export function ImagenDelDia ({fecha, explicacion, tipoContenido, titulo, url }) {

    if(tipoContenido == "video"){
        return (
        <>
            <div>
                <a href={url}>Ver</a>
                <iframe src={url} title={titulo} width="600" height="400" />
                <h2>{titulo}</h2>
                <p>{explicacion}</p>
                <i>{fecha}</i>
            </div>
        </>
        );
    }else{
        return (
        <>
            <div>
                <img src={url} alt={titulo}/>
                <h2>{titulo}</h2>
                <p>{explicacion}</p>
                <i>{fecha}</i>
            </div>
        </>
        );
    }
}

