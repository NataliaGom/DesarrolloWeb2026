export function Alerta({ texto, tipo }) {
    let colorFondo;
    let colorTexto;

    switch (tipo) {
        case "ok":
            colorFondo = "green";
            colorTexto = "white";
            break;
        case "advertencia":
            colorFondo = "yellow";
            colorTexto = "black";
            break;
        case "error":
            colorFondo = "red";
            colorTexto = "white";
            break;
        default:
            colorFondo = "blue";
            colorTexto = "white";
    }

    return (
        <>
        <h2>Alerta: </h2>
        <div style={{ backgroundColor: colorFondo, color: colorTexto }}>
            {texto}
        </div>
        </>
    );
}
