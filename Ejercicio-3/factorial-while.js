let n = 10;
let resultado;
let factorial = 1;
let i = 0;

while (i < n){
    factorial *= (n - i);
    i++;
    resultado = factorial;
}

console.log(resultado);