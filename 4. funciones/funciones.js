// function miFuncionSaludo(){
//     console.log("Esta es mi funcion, bienvenido")
// }

// function miFuncion(texto,valor){
//     console.log("Este mensaje es ",texto, valor)
// }
// miFuncionSaludo()
// miFuncion("hola",45)
// console.time("hi")
// let saludo=function(){
//     console.log("bienvenido")
// }
// //llamamos
// saludo()
// console.timeEnd("hi")

// console.time("ho")
// function saluda(){
//     console.log("bienvenido")
// }
// //llamamos
// saluda()
// console.timeEnd("ho")
//uso de funcion de flecha
// let saludo=texto=>texto
// console.log(saludo("hoal"))

//binding en javascript lo que hace subir las funcion declarativas a la cabezera pero solo sucede con las funcion clasica y se puede ejecutar desde cualquier parte del archivo.
// console.log(saludoTres())
// function saludoTres(){
//     return "hola primo"
// }

// //La funcion de flecha y de valor se ejecuta llamandole  despues de su creacion
// let saludoCuatro=texto=>texto
// console.log(saludoCuatro("hola soy una funcion de tipo flecha"))

// let segundoSaludo=function (texto){
//     return texto
// }
// console.log(segundoSaludo("hola soy la funcion de tipo valor"))

//crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma mas uno de esta variables y la resta mas uno de la misma variable ademas de poder tener un funcion que me permita acceder al valor actual y poder mostrarlo.
// function content(){
//     let contador=0
//     function incremento(){
//         return contador++
//     }
    
//     function decremento(){
//         return contador--
//     }
    
//     function valorContador(){
//         return console.log(contador)
//     }
//     return {
//        valorContador,
//      incremento,
//       decremento
//     }
// }

// let count1 = content()

// for (let i=0;i<5;i++){
//     count1.incremento()
// }
// count1.valorContador()

// let count2 = content()
// for (let i=0;i<5;i++){
//     count2.decremento()
// }
// count2.valorContador()

// function contador(){
//     this.contador=0
//     this.incremento=function(){
//         this.contador++
//         }

//     this.decremento=function(){
//         this.contador--
//         }
// }

// //realizamos la instancia
// let count1 = new contador()
// count1.decremento()
// console.log(count1.contador())
function Contador(nombre)
{
    this.count=0
    this.nombre=nombre
}{
Contador.prototype={
    incremento:function(){this.count++},
    actualizarNombre:function(nuevoNombre){this.nombre=nuevoNombre},
    decremento:function(){this.count--},
    mostrarDatos:function(){return `${this.count}, ${this.nombre}`}
}  
}
//instanciamos la funcion y ponemos new
let contadorUno=new Contador("rosquin")
console.log(contadorUno.mostrarDatos())

contadorUno.incremento()
contadorUno.incremento()
console.log(contadorUno.mostrarDatos())
contadorUno.actualizarNombre("rosquin primo")
console.log(contadorUno.mostrarDatos())