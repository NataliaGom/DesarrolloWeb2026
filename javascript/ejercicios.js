//funcion para sacar promedio de 3 numeros

function promedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;
}

let nums = [10, 8, 6];
console.log(promedio(nums)); 


//funcion para sacar cuadrado de elementos

function cuadrado(elementos){
    let res = [];
    
    for (let i=0; i < elementos.length; i++){
        res.push(elementos[i] ** 2);
    }

    return res;
}

console.log(cuadrado([2, 3, 4])); 


//funcion para calcular impiestos de una venta (entrada: venta, salida: arreglo con monto, iva, total)

function calcularImpuestos(venta) {
    let iva = venta * 0.16;
    let total = venta + iva;

    return [venta, iva, total];
}

console.log(calcularImpuestos(1000)); 



