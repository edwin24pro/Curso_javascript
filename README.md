## Indice
- [Funciones](#funciones)
  - [estructura de una funcion (como se cre una funcion)](#estructura-de-una-funcion-como-se-cre-una-funcion)
  - [Tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
  - [Argumentos y Parametros posicionales](#argumentos-y-parametros-posicionales)
  - [Argumento  y Parametros  Nominales](#argumento--y-parametros--nominales)
  - [Tipos de funciones por su connotacion](#tipos-de-funciones-por-su-connotacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
  - [Funcion de flecha](#funcion-de-flecha)
    - [Diferencias](#diferencias)
    - [binding](#binding)
  - [la pila de llamada](#la-pila-de-llamada)
  - [Clouse o funciones de cierre (funciones que retorna funciones)](#clouse-o-funciones-de-cierre-funciones-que-retorna-funciones)
    - [closure de tipo clase](#closure-de-tipo-clase)
    - [prototype (Tarea - averiguar y sus ejemplos)](#prototype-tarea---averiguar-y-sus-ejemplos)
  - [RECURSION EN FUNCIONES (Tarea)](#recursion-en-funciones-tarea)
  - [FUNCIONES CALLBACKS (TAREA)](#funciones-callbacks-tarea)
- [CLASES](#clases)
    - [Estructura de una clase en javascript](#estructura-de-una-clase-en-javascript)
# Funciones
Las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular (modularizar) nuestros programas y estructurarlos en bloques que `realicen un atarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecución `devuelven un valor`, que conseguimos con el parametro `return`.
## estructura de una funcion (como se cre una funcion)
Para crear una funcion debemos realizar los siguientes pasos.
1. Hcer uso del keywork `function`.
2. Darle un nombre a la funcion.
3. Crear los parametros que recibira entre parentesis `()`.
4. Crear el cuerpo de la funcion `{}`

```js 
function miFuncion(){
    console.log("Esta es mi funcion")
}

function miFuncion(texto,valor){
    console.log("Este mensaje es ",texto, valor)
}
```
**Como ejecutamos una funcion**
Para ejecutar una funcion debemos hacer el llamado de la
misma haciendo uso unicamente de su nombre y los parametros que recibira.
```js
//creando la funcion
miFuncion(){
    console.log("hola")
//ejecucion
miFuncion()
}
```
> [!NOTE]
> **Reglas para poner el nombre a una funcion**
> los nombres de las funciones deben representar acciones, por lo que deben construirse usando el `verbo` que representa la acciion seguido de un `sustantivo` repreesenta la entidad.

## Tipos de argumentos y parametros
Es la manera como se reemplazan los argumentos con los parametros.
## Argumentos y Parametros posicionales
Posicionales se le llama por que los argumentos tomaran los parametros en el orden que se pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
respuesta=sumaNumeros(1,3,4,5)
}
```
## Argumento  y Parametros  Nominales
Se le conocen a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
function registroAlumno(nombre, apellido, sexo){
    return nombre
}
respuesta=registroAlumno(sexo="primo",nombre="rosquin",apellido="del mar")
```
## Tipos de funciones por su connotacion
### Funciones como valor
En este caso se crea una funcion como si fuera el valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
//llamamos
saludo()
```
### Funcion como declaracion
Se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saluda(){
    return "saludos a todos"
}
console.log(saludo())
```
## Funcion de flecha
Esta funcion es introducida a partir de la version de ecma script 5 `es5`.
Se le implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
La funcion flecha evita la `verbosidad` en javascript.
> [!NOTE]
> `verbosidad` o `verboso` se utiliza en la programacion para referirse a un codigo  que necesita demacias lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demaciado externo o redundante.

Se crea de la misma manera que una funcionn como valor, eso quuiere decir que la funcion flecha sera el valor de un enlace.
La funcion flecha o tambien conocido como `arrow function` tiene la siguiente estructura .
El parametro seguido del simbolo flecha `->` o del cuerpo de ser necesariio o solo de codigo que se retorna.
```js
let saludo=()=>("hola mundo")
console.log(saludo())

let saludo=texto=>texto
console.log(saludo("hoal"))
```
### Diferencias
Las diferncias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.
### binding
Es una tecnica que guarda las funciones y variables (enlaces) sube al principio la declaracion no el valor a la cabecera del archivo javascript.
```js
function saludo(){
    return "hola primo"
}
function despedida(){
    return "chau primo"
}
```
```js
consolole.log(saludo())
function saludo(){
    return "hola primo"
}

```
## la pila de llamada
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
**Averiguar sobre LIFO**
La funcion que entra ultimo es el primero que se ejecuta y el ultimo en terminar la ejecucion.
```js
function cortarTomate(){
    console.log("Cortando tomate")
}

function cortarLechuga(){
    console.log("Cortando Lechuga")
}

function cortarPepino(){
    console.log("Cortando Pepino")
}

function cortarLimon(){
    console.log("Cortando Limon")
}

function prepararEnsalada(){
    cortarTomate()
    cortarLechuga()
    cortarLimon()
    console.log("mesaclando las verduras")
}

function comer(){
    prepararEnsalada()
    console.log("Tragando la ensalada")
}
comer()
```
## Clouse o funciones de cierre (funciones que retorna funciones)
Un `clousure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seren accesibles si son devueltos con el keyword `return`.
Antes de que aparesca la version `ecm6` los `closure` eran un patrol creacional que nos permitia modularizar nuestro codigo, en lugar de usar las `clases`, que eran populares en otros lenguajes pero javascript aun no lo implementaba.
```js
//una funcion que retorna una funcion que retorna otra funcion (por lo general es una funciion anonima)
//funcion clasica
function retornarValor(n){
    return n

}

//funcion closure
function retornarValor(n){
    return function()
    return n+1
}

//llamando la funciion clasica
retornarValor(2)
//llamando la funcion closure
retornarValor(2)()
```
> [!NOTE]
> Las funciones `closure` son usadas poque pueden mantener el valor de sus ennlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que ese realiza.

### closure de tipo clase
la funcion

```js
function contador(){
{   this.contador=0
    this.incremento=function()
    this.contador++}
{   this.contador=0
    this.decremento=function()
    this.contador--}
}
```
> [!WARNING]
> Elproblema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservara espacion en memoría para toda la clase y funcion esta se replica en memoria.

### prototype (Tarea - averiguar y sus ejemplos)
Para crear un prototype tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestras variables locales son las que trabajaremos.
Luego accederemos al prototype de nuestra funcion creada y en valor o variable de tipo objeto  le indicaremos las funciones que tendra nuesta funcion principal que interactua con nuestra funcion principal que interactuara conn nuestras variables locales.
```js
function Contador(nombre)
{
    this.count=0
    this.nombre=nombre
}{
Contador.prototype={
    incremento:function(){this.count ++},
    decremento:function(){this.count--},
    mostrarDatos:function(){return `${this.count}, ${this.nombre}`}
}  
}
```
> [!NOTE]
> Es una convencion usar como nombre de nuestra funcion principal, 1. que debe ser singular, 2.que use PascalCase

## RECURSION EN FUNCIONES (Tarea)
recursión es cuando una función sigue llamándose a sí misma, hasta que ya no tiene que hacerlo. la función se sigue llamándose a sí misma, pero con una entrada más pequeña cada vez. la función no decide por sí misma cuando parar. Nosotros le decimos cuando. Nosotros le damos a la función una condición conocida como caso base. El caso base es la condición que le dice a la función cuando dejar de llamarse a sí misma.
```js
let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1
```
## FUNCIONES CALLBACKS (TAREA)
En JavaScript, las funciones son objetos. ¿Podemos pasar objetos a las funciones como parámetros? Sí.

Así, también podemos pasar funciones como parámetros a otras funciones y llamarlas dentro de las funciones externas.
```js
function imprimir(callback) {  
    callback();
}
```
JavaScript ejecuta el código secuencialmente en orden descendente. Sin embargo, hay algunos casos en los que el código se ejecuta (o debe ejecutarse) después de que ocurra otra cosa y también de forma no secuencial. Esto se llama programación asíncrona.

Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.
```js
const mensaje = function() {  
    console.log("Este mensaje se muestra después de 3 segundos");
}
 
setTimeout(mensaje, 3000);
```
# CLASES
Las clases en javascript llegan en la version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin enbargo con la llegada es `ES6`,javascript adopta ser un lenguaje de programcion multiparadigma, entre ellos la `programcion orientada a objetos` con la llegada de las `clases`.
### Estructura de una clase en javascript
Una clase esta separada en tres grandes secciones.
1. El nombre de la clase que debera ser en singular y en PascalCase.
2. Debera tener atributos (valores, variables) estos deberan ser sustantivos y estar escritos en camellCase.
3. Debera tener métodos (acciones, funciones estos deberan ser verbos y estas deberan estar escritos en camelCase).
   ```js
   class Computadora{
    //atributos
    constructor(marca,color){
        this.marca=marca,
        this.color=color,
        this.tipoCase="tower"
    }
    //metodos
    encender(){return "estoy encendiendo"}
    apagar(){return "apagando"}
    escribir(){return "escribiendo.."}
    jugar(){return "jugando dota"}
   }
   //instancia
   let miPc=new Computadora("asus","negro")
   miPc.encender()
   ```

[imagen]()

