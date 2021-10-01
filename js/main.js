let contador = document.getElementById('numero');
let numero = 0;


function adicionarContador() {
    numero++;
    if (numero > 0) {
        contador.style.color = 'green';
    }
    if (numero == 0) {
        contador.style.color = 'black';
    }
    contador.innerHTML = numero;
    console.log('pressionando')
}

function diminuirContador() {
    numero--;
    if (numero < 0) {
        contador.style.color = 'red';
    }
    if (numero == 0) {
        contador.style.color = 'black';
    }
    contador.innerHTML = numero;

}