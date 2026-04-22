
/* 
------------------
   UN COMPONENTE
------------------

const Perfil = () => {
    return(
        <div>
            <img src={
                "https://carreras.itam.mx/wp-content/uploads/2024/08/colmillo-3.jpg"
                } 
                alt="Colmillo"
            />
        </div>
    );
};

export default function Galeria() {
    return (
        <div>
            <h1>Galeria de ITAM</h1>
            <Perfil/> 
            <Perfil/> 
            <Perfil/> 
        </div>
    );
}

*/

/*
-----------------------
   VARIOS COMPONENTES
-----------------------
*/

const Perfil = ({url, nombre}) => {
    return(
        <div>
            <img src={url} alt={nombre}/>
        </div>
    );
};

export default function Galeria() {
    return (
        <div>
            <h1>Galeria de ITAM</h1>
            <Perfil url={"https://carreras.itam.mx/wp-content/uploads/2024/08/colmillo-3.jpg"} nombre={"Colmillo"}/> 
            <Perfil url={"https://i0.wp.com/mundoitam.com/wp-content/uploads/2022/10/Farah_Enlamira.jpeg?resize=532%2C452&ssl=1"} nombre={"Farah"}/> 
            <Perfil url={"https://intercambio.itam.mx/sites/default/files/48.jpg"} nombre={"itam"}/> 
        </div>
    );
}

export function GaleriaConArreglo(){
    const perfiles = [];

    return (
        <>
        {perfiles.map((perfil, index) => (
            <PerfilConParametros key={index} url={perfil.url} textoAlternativo={perfil.textoAlternativo} />
        ))}
        </>
    );
}