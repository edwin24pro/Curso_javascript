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