//primer ejercicio
// function numeroMenor(num){
//     let cuentaAtras = numero => {
//         //base case
//         if (numero === 0) {
//             return;
//         }
//         if (numero===1){
//         console.log(numero);
//     }
//         return cuentaAtras(numero - 1);
//     };
//     cuentaAtras(num) // 5, 4, 3, 2, 1
// }
// numeroMenor(4)

//segundo ejercicio
function fibonacci(num){
    if (num<=1){return num}
    else {return fibonacci(num-1)+fibonacci(num-2)}
}

for (let i=0;i<20;i++){console.log(fibonacci(i))}
