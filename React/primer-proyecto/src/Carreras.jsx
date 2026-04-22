import Programa from "./ProgramasItam";

export default function Carreras() {
    const programas = [
        {
            url: "https://carreras.itam.mx/licenciatura-actuaria/wp-content/uploads/sites/18/2024/10/estudiantes-itam.webp",
            textoAlternativo: "foto actuaria",
            nombre: "Actuaría",
            plan: "Plan de estudios"
        },
        {
            url: "https://carreras.itam.mx/licenciatura-actuaria/wp-content/uploads/sites/18/2024/10/proceso-admision-1-1024x853.webp",
            textoAlternativo: "foto admin",
            nombre: "Administración de Negocios",
            plan: "Plan de estudios"
        },
        {
            url: "https://carreras.itam.mx/wp-content/uploads/2024/08/actuaria.webp",
            textoAlternativo: "foto cpol",
            nombre: "Ciencia de Datos",
            plan: "Plan de estudios"
        },
        {
            url: "https://carreras.itam.mx/licenciatura-actuaria/wp-content/uploads/sites/18/2025/07/mini-2025-finanzas.webp",
            textoAlternativo: "foto finanzas",
            nombre: "Direccion financiera",
            plan: "Plan de estudios"
        }
    ];

    return (
        <div>
            <h1>Carreras ITAM</h1>
            <div className="contenedor">
            {programas.map((carrera, index) => (
                <Programa
                    key={index}
                    url={carrera.url}
                    alt={carrera.textoAlternativo}
                    nombre={carrera.nombre}
                    plan={carrera.plan}
                />
            ))}
            </div>
        </div>
    );
}