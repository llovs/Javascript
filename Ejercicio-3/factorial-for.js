let n = 10;
let resultado;
let factorial = 1;

for(let i = 0; i < n; i++){ 
    factorial *= (n - i);
    resultado = factorial;
}

console.log(resultado);