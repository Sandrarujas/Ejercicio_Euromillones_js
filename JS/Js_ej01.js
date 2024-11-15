 
 // Creamos una función para verificar si el número es capicúa o no.

function isPalindrome(num) {

    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
}
 // Creamos una función para verificar si el número es perfecto.
function isPerfectNumber(num) {

    let sumDivisors = 0;

    for (let i = 1; i <= num / 2; i++) {

        if (num % i === 0) {

            sumDivisors += i;
        }
    }
    return sumDivisors === num;
}


// Creamos una función que se ejecuta al hacer cloc en el botón. 

function checkNumber() {
    const number = parseInt(document.getElementById('number').value);

    // Verificamos si el número es válido.
    if (isNaN(number) || number <= 0) {
        
        document.getElementById('resultado').innerHTML = "¡ERROR! Por favor, introduce un número entero positivo.";
        return;
    }

    // Comprobamos si el número es perfecto.
    const isPerfect = isPerfectNumber(number) ? ", es un número perfecto." : ", no es un número perfecto.";

    // Comprobamos si el número es capicúa.
    const isPalindromeResult = isPalindrome(number) ? ", es un número capicúa." : ", no es un número capicúa.";

    // Mostramos el resultado en la página.
    document.getElementById('resultado').innerHTML = `
        El número ${number} ${isPerfect} <br>
        El número ${number} ${isPalindromeResult}.
    `;
}
