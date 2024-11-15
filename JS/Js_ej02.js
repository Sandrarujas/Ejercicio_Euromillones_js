

// Creamos una función para generar una combinación aleatoria.
function generarCombinacionGanadora() {

    let numeros = [];
    let estrellas = [];

    while (numeros.length < 5) {

        let num = Math.floor(Math.random() * 50) + 1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }

    while (estrellas.length < 2) {

        let star = Math.floor(Math.random() * 12) + 1;
        if (!estrellas.includes(star)) {
            estrellas.push(star);
        }
    }

    return {

        numeros: numeros.sort((a, b) => a - b),
        estrellas: estrellas.sort((a, b) => a - b)
    };
}

// Creamos una función para comprobar los aciertos
function comprobar() {

    const numerosUsuario = [

        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
    ];

    const estrellasUsuario = [

        parseInt(document.getElementById('star1').value),
        parseInt(document.getElementById('star2').value)

    ];

    // Validamos de entradas de datos.
    if (numerosUsuario.some(isNaN) || estrellasUsuario.some(isNaN)) {

        document.getElementById('resultado').innerHTML = "<span class='error'>Por favor, introduce solo números válidos en todos los campos.</span>";
        return;
    }

    if (new Set(numerosUsuario).size !== 5 || new Set(estrellasUsuario).size !== 2) {

        document.getElementById('resultado').innerHTML = "<span class='error'>No puedes ingresar números repetidos.</span>";
        return;
    }

    if (numerosUsuario.some(num => num < 1 || num > 50) || estrellasUsuario.some(star => star < 1 || star > 12)) {

        document.getElementById('resultado').innerHTML = "<span class='error'>Los números deben estar entre 1 y 50 para los números y entre 1 y 12 para las estrellas.</span>";
        return;
    }

    // Generamos combinación ganadora
    const combinacionGanadora = generarCombinacionGanadora();

    // Comprobamos aciertos
    const aciertosNumeros = numerosUsuario.filter(num => combinacionGanadora.numeros.includes(num)).length;
    const aciertosEstrellas = estrellasUsuario.filter(star => combinacionGanadora.estrellas.includes(star)).length;

    // Mostramosresultados
    document.getElementById('resultado').innerHTML = `
        <h3>Combinación Ganadora:</h3>
        <p>Números: ${combinacionGanadora.numeros.join(', ')}</p>
        <p>Estrellas: ${combinacionGanadora.estrellas.join(', ')}</p>
        <h3>Aciertos:</h3>
        <p>Números acertados: ${aciertosNumeros}</p>
        <p>Estrellas acertadas: ${aciertosEstrellas}</p>
    `;
}