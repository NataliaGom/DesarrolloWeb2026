import { useState } from "react";

const BotonOperacion = ({ cambiar, operacion, numero, texto }) => {

    const darClick = () => {
        cambiar((prev) => {
            switch (operacion) {
                case "+":
                    return prev + numero;
                case "-":
                    return prev - numero;
                case "*":
                    return prev * numero;
                default:
                    return prev;
            }
        });
    };

    return (
        <button onClick={darClick}>
            {texto}
        </button>
    );
};


export default BotonOperacion;
