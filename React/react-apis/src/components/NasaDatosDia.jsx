import { useEffect, useState } from "react";
import { RecursoDelDia } from "./Apod.jsx";

const todosLosEstilos = [
  "default",
  "vintage",
  "elegante",
  "anime",
  "minimalista",
  "caricatura",
  "disney",
  "fosforescente",
];

export function NasaDatosDelDia() {
  // variable de estado para guardar la respuesta de la API
  const [datosDelDia, setDatosDelDia] = useState(null);
  // useEffect para sincronizar con info externa, en este caso la API de NASA
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=LcUzaxu7d2y4ByUXHW3exnnJECp7GtPE6sOmitk8",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const datosTransformados = {
          fecha: data.date,
          explicacion: data.explanation,
          tipoContenido: data.media_type,
          titulo: data.title,
          url: data.url,
        };
        setDatosDelDia(datosTransformados);
      });
  }, []);

  if (datosDelDia === null) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {todosLosEstilos.map((estilo) => (
        <div className="col" key={estilo}>
          <RecursoDelDia
            fecha={datosDelDia.fecha}
            explicacion={datosDelDia.explicacion}
            tipoContenido={datosDelDia.tipoContenido}
            titulo={datosDelDia.titulo}
            url={datosDelDia.url}
            estilo={estilo}
          />
        </div>
      ))}
    </div>
  );
}