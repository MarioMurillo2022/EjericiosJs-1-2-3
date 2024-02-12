console.log('Hola mundo');

function convertir() {

    let numeroIngresado = (document.getElementById('numeroUsuario').value)
    console.log(numeroIngresado);

    if (numeroIngresado > 0) {
        const valorUsuario = parseFloat(document.getElementById('numeroUsuario').value);

        // Convertir a metros
        document.getElementById('Metros').value = valorUsuario;
        // Convertir a kilometros
        document.getElementById('kilometros').value = valorUsuario / 1000;
        // Convertir a centimetros
        document.getElementById('centimetros').value = valorUsuario * 100;
        // Convertir a pulgadas
        document.getElementById('Pulgadas').value = valorUsuario * 39.3701;
        // Convertir a yardas
        document.getElementById('Yardas').value = valorUsuario * 1.09361;
        // Convertir a pies
        document.getElementById('Pies').value = valorUsuario * 3.28084;

    } else {
        asignarTextoElemento('h1', `El numero ingresado debe ser positivo`);
        limpiar();
    }
}

function limpiar() {
    document.querySelector('#numeroUsuario').value = '';
    document.querySelector('#Metros').value = '';
    document.querySelector('#kilometros').value = '';
    document.querySelector('#centimetros').value = '';
    document.querySelector('#Pulgadas').value = '';
    document.querySelector('#Yardas').value = '';
    document.querySelector('#Pies').value = '';
}

function reiniciarConvertidor() {
    limpiar();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Convertidor de medidas !');
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

condicionesIniciales();