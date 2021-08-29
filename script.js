//Solución ejercicio 1 para 5 iteraciones

function solveE(limit) {
    let res = 1;
    for(let i = 1; i <= limit; i++) {
        res += 1/factorial(i);
    }
    return res;
}

function factorial(n) {
    let total = 1;
    for(let i = 1; i <= n; i++) {
        total *= n;
    }
    return total;
}

//Ingresar límite de iteraciones
console.log(solveE(5));

//Solución ejercicio 2

function solveS(n) {
    let res = 4;
    let i = 3;
    let count = 1;
    while(i <= n) {
        if(count%2 === 0) {
            res += (4/i);
            count++
            i += 2;
        } else {
            res -= (4/i);
            count++
            i += 2;
        }
    }
    return res;
}

/*
function comprobation() {
    return 4 - (4/3) + (4/5) - (4/7);
} */

console.log(solveS(7));
