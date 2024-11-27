//crear una lista que almacene las cinco vocales y luego las muestre por la consola
// let vocales=["a", "e", "i", "o", "u"]
// // console.log(vocales[2])
// //accediendo a los elementos con for
// for (i=0;i in vocales;i++){
//     console.log(vocales[i],vocales.length)
// }

//tengo una lista de 7 frutas
//crear un programa que identifique que en mi lista existe naranja, de existir me mostrara su indice, de no existir  mostrar error
// let frutas= ["pera","papaya","naranja", "mansana","uva", "coco", "sandia"]
// for (i=0;i in frutas;i++){
//     if (frutas[i] == "naranja"){
//         console.log("su indice es ", i)
//         break
//     }
//     else{
//         console.warn("error")
//     }
// }

//crear dos funciones que reciban por parametros una lista de numeros una funcion encontrara devolvera el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista, ojo no usar los metodos de min y max

function encontrarMenor(lista) {
    let menor = lista[0]; // Asignamos el primer elemento como el menor
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]
        }
    }
    return `numero menor ${menor}`
}
console.log(encontrarMenor([2,4,6]))

function encontrarMayor(lista) {
    let mayor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]
        }
    }
    return `numero mayor ${mayor}`
}
console.log(encontrarMayor([2,4,6,8]))

//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
// let letras=["a","b","a","c","x"]


// function contadorA(array){
//     let cont=0
//     for (i=0;i in letras;i++){
//         if (letras[i]=="a"){
//             cont++
//         }
//         else{
//             console.log("no hay ninguno")
//         }
//     }
//     console.log("Se encuentra ",cont," a")
//     }

// contadorA(letras)

