import {useEffect} from "react";
import {useState} from "react";


export function NasaDatosDelDia(){
    const [datosDelDia, setDatosDelDia] = useState(null);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=WVwjGIKWFaVexkqugHLAzMzv0DMTFbmn0tPEQmaR")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDatosDelDia({
                    fecha: data.date, 
                    explicacion: data.explanation, 
                    tipoContenido: data.media_type, 
                    titulo: data.title, 
                    url: data.url, 
                });
            });
    },[]);

    return(
        <div>API de nasa</div>
    );
}