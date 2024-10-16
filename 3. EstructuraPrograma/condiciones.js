//ejemplo de condicion simple
//Capturamos la edad y lo convertimos a numero
let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos es number realmente
if (typeof edad == "number"){
    //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
    console.log(edad*edad)
}
//ejemplo de una condicion simple de una sola linea
if (1+1==2) console.log("es verdad")
    //Ejercicio: de condiciones
//Crear un programa que me pida un numero y me muestre por consola si es un numero par o impar
let numero = prompt("Escribe un numero")
if (+numero%2 == 0){
    console.log("es par")
}
else{
    console.log("es impar")
}
//uso de 'if' 'else if'
let total_compra = 30
if (total_compra > 10 && total_compra <100){
    console.log("tienes un descuento del 10%")
}
else if (total_compra > 50 && total_compra <500){
console.log("tienes un descuento del 20%")
}
else{
    console.log("tienes un descuento del 50%")
}
//EJERCICIO
console.log('Hello!');
edad = prompt("escribe tu edad")
if (edad > 4 && edad <8){
  console.log("te ganaste un ghupetin")
}
else if (edad >9 && edad < 13){
  console.log("te ganaste uns pelota firmads por cuto")
  }
else if (edad >14 && edad < 17){"te gasnsste celular nokia"
}
else if (edad >= 18){
  console.log("al primo lo haces leña")
}