let n = 10;
let resultado;
let factorial = 1;
let i = 0;

while (true) {
    factorial *= (n - i);
    i++;

    if (factorial == 0) {
        break;
    }
    
    resultado = factorial;
}

console.log(resultado);