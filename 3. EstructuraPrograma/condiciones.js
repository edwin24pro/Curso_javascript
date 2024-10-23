// //ejemplo de condicion simple
// //Capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("ingresa tu edad"))
// //verificamos si el tipo de datos es number realmente
// if (typeof edad == "number"){
//     //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
//     console.log(edad*edad)
// }
// //ejemplo de una condicion simple de una sola linea
// if (1+1==2) console.log("es verdad")
//     //Ejercicio: de condiciones
// //Crear un programa que me pida un numero y me muestre por consola si es un numero par o impar
// let numero = prompt("Escribe un numero")
// if (+numero%2 == 0){
//     console.log("es par")
// }
// else{
//     console.log("es impar")
// }
// //uso de 'if' 'else if'
// let total_compra = 30
// if (total_compra > 10 && total_compra <100){
//     console.log("tienes un descuento del 10%")
// }
// else if (total_compra > 50 && total_compra <500){
// console.log("tienes un descuento del 20%")
// }
// else{
//     console.log("tienes un descuento del 50%")
// }
// //EJERCICIO
// console.log('Hello!');
// edad = prompt("escribe tu edad")
// if (edad > 4 && edad <8){
//   console.log("te ganaste un ghupetin")
// }
// else if (edad >9 && edad < 13){
//   console.log("te ganaste uns pelota firmads por cuto")
//   }
// else if (edad >14 && edad < 17){"te gasnsste celular nokia"
// }
// else if (edad >= 18){
//   console.log("al primo lo haces leña")
// }
//uso de switch
// let edad= Number(promp("ingrese su edad"))
// switch (edad){
// case 4:
//   console.log("tienes 4 años")
//   break
// case 6:
//   console.log("tienes 6 años")
// default:
//   console.log("tienes: ",edad)
//   break
// }
let edadPersona= Number(prompt("ingrese su edad"))
console.log("esto es ",edadPersona)
switch (edadPersona){
  case (edadPersona >= 4):
    console.log("te ganaste un chupetin")
    break
  // case (edadPersona>=9 && edadPersona<=13):
  //   console.log("te ganaste una pelota")
  //   break
  // case (edadPersona>=14 && edadPersona<=17):
  //   console.log("te ganaste un nokia")
  //   break
  // case (edadPersona>=18 &&         edadPersona<=100):
  //   console.log("te ganaste una buena")
  //   break
  // default:
  //   console.log("no tienes la edad necesaria")
}
//realizar un program que pida 5 nombres de frutas atravees del navegador y realizara las siguientes evaluaciones en caso que sea 
//naranja,limon ->"es una fruta ccitrica"
//platano, manzana->"es una fruta dulce"
//fresa

// for (let i=0; i<6;i++){
//   let obtenerNombreFruta=prompt(`Escribe un nombre de la ${obtenerNombreFruta} fruta`)
// }
