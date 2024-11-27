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
- [Estructura de datos](#estructura-de-datos)
  - [Lista o array](#lista-o-array)
    - [creacion](#creacion)
    - [acceder a un elemento del array](#acceder-a-un-elemento-del-array)
    - [metodos](#metodos)
    - [Tarea](#tarea)
  - [objetos](#objetos)
    - [creacion](#creacion-1)
    - [acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
    - [metododos](#metododos)
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
# Estructura de datos
A parte de los tipos de datos primitivpos , javascript nos proporciiona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos deberemos conocer la forma de representarlos en la memoroia de nuestra maquina.
Javscript trabaja con dos tipos de datos estructurados que trabajan de manera independiente o en conjunto.
son los siguientes
## Lista o array
Las listas en jscript son unn tipo de dato estructurado que nos permite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato que se almacene en una lista se le conoce como elemento.
asi cada elemento estara separado por coma.
### creacion
Primero debemos crear un enlace(una variable) y luego le asignamos la lista que se crea con `corchetes[]`, los elementos estaran dentro de los corchetes separados por comas.
```js
//estoy creando una lista de numeros
let milista=[]
//creasndo una lista de numeros
let numeros=[1,2,3,4]
//creando una lista de nombres
let nombre=["edwin","jory","adan","nadine"]
//creando una lista mixta
let listamixta=["edwin",3, false, []]
```
### acceder a un elemento del array
Para poder acceder a un elemento del array debemos entender que javascript asignara por cad elemento un indice que nos permitira acceder a un elemento en específico este indice es incremental y comenzada de cero con el primer elemento, el ultimo elemento sera la cantidad de elemntos menos uno.
```js
let numeros=[3,5,7,3,2,2]
//acceder a la voacal "o"
console.log(num[2])
```
Existe otra manera de acceder a los indices de un array,esto se logra recorriendo cada elemento de una listaesto se logra con un bucle `for`.
### metodos
Los métododos son funciones que nos permitencrear, actualizar y eliminar los elementos de una lista, todas las variables que almacenen una lista nos permiten acceder a sus metodos poniendo unb punto despues del nombre de la variable.
- Metodo para recuperar la longitud de elementos que tiene una lista.
  ```js
  let numeros=[1,4,3,6,8]
  numeros.lenght
  ```
- Metodo para agragar un elemento al final de la lista
  ```js
  let vocales=["a"]
  vocales.push("e")
  ```
- Metodo para eliminar el ultimo elemento de una lista
  ```js
  let vocales=["a", "e"]
  vocales.pop()
  ```
  ### Tarea
Métodos Comunes para Tratamiento de Listas en JavaScript

- **shift:** Elimina el primer elemento de un array y lo devuelve, desplazando todos los demás elementos hacia la izquierda.
Ejemplo:
```js
let arr = [1, 5, 3]
arr.shift()  // Devuelve 1, array ahora es [2, 3]
console.log(arr.shift())
```
- **unshift():** Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.
Ejemplo:
```js
let arr = [1, 4, 3]
arr.unshift(0)  // [0, 1, 4, 3]
```
- **splice():** Modifica el contenido de un array eliminando, reemplazando o añadiendo elementos en una posición específica.
Ejemplo:
```js
let arr = [1, 2, 3, 4]
arr.splice(2, 1, 'a', 'b')  // Elimina 1 elemento en el índice 2 y agrega 'a' y 'b'
// Resultado: [1, 2, 'a', 'b', 4]
```
- **slice():** Devuelve una copia superficial de una porción de un array, sin modificar el array original.
Ejemplo:
```js
let arr = [1, 2, 3, 4]
let newArr = arr.slice(1, 3)  // Devuelve [2, 3]
```

- **forEach():** Ejecuta una función sobre cada elemento del array.
Ejemplo:
```js
let arr = [1, 2, 3]
arr.forEach(item => console.log(item))  // Imprime 1, 2, 3
```
- **map():** Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
Ejemplo:
```js
let arr = [1, 2, 3]
let newArr = arr.map(x => x * 2)  // [2, 4, 6]
```
- **filter():** Crea un nuevo array con todos los elementos que pasen una prueba definida por una función.
Ejemplo:
```js
let arr = [1, 2, 3, 4, 5]
let evenArr = arr.filter(x => x % 2 === 0)  // [2, 4]
```
- **reduce():** Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.
Ejemplo:
```js
let arr = [1, 2, 3, 4]
let sum = arr.reduce((acc, curr) => acc + curr, 0)  // 10
```
- **find():** Devuelve el primer elemento en el array que satisface la condición proporcionada en la función.
Ejemplo:
```js
let arr = [1, 2, 3, 4]
let found = arr.find(x => x > 2)  // 3
```
- **some():** Verifica si al menos un elemento en el array cumple con una condición especificada en la función.
Ejemplo:
```js
let arr = [1, 2, 3, 4]
let result = arr.some(x => x > 3)  // true
```
- **every():** Verifica si todos los elementos del array cumplen con la condición definida por una función.
Ejemplo:
```js
let arr = [2, 4, 6]
let result = arr.every(x => x % 2 === 0)  // true
```

- **indexOf():** Devuelve el primer índice en el que un elemento aparece en el array, o -1 si no se encuentra.
Ejemplo:
```js
let arr = [1, 2, 3, 4]
let index = arr.indexOf(3)  // 2
```
- **includes():** Verifica si un array contiene un elemento determinado.
Ejemplo:
```js
let arr = [1, 2, 3]
let contains = arr.includes(2)  // true
```
- **join():** Une todos los elementos de un array en una cadena de texto, separada por un delimitador especificado.
Ejemplo:
```js
let arr = ['a', 'b', 'c']
let str = arr.join('-')  // 'a-b-c'
```
- **concat():** Une dos o más arrays y devuelve un nuevo array.
Ejemplo:
```js
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = arr1.concat(arr2)  // [1, 2, 3, 4]
```
- **sort():** Ordena los elementos de un array en su lugar.
Ejemplo:
```js
let arr = [3, 1, 4, 5]
arr.sort();  // [1, 3, 4, 5]
```
- **reverse():** Invierte el orden de los elementos en un array.
Ejemplo:
```js
let arr = [1, 2, 3]
arr.reverse()  // [3, 2, 1]
```
- **split():** Convierte una cadena de texto a un array, tambien separa una cadena de texto por un metodo.
  Ejemplo:
  ```js
  let string="hola+hola"
  let cortarString=string.split("+")//[hola,hola]
  ```
## objetos
Los objetos son tipos de datos estructuraods similares a las listas, para poder acceder a unn elemento de la lista javascript asignaba indices en este caso los objetos como unica difererencia de las listas nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`.
Cada clave:valor es un elemento de un objetosi deseamos crear mas elementos tendremos que separarlos por comas.
### creacion
Para crear un objeto debemos encerar los elementos en llaves `{}` para elemento esatra conformado por su `cave:valor`.
```js
let datosJory=["jory","rodriguez",20,"M"]
let datosJoryObjeto={
    nombre:"Jory",
    apellido:"Rodriguez",
    edad:"20",
    sexo:"todos los dias",
    ganados:["el primo", "los chamos", "las enfermeras","minero"]
    direccion:{
        tipoCalle:"pasaje",
        nombreCalle:"querobamba",
        numeroVivienda:222,
        numeroCuarto:5
    }
    numero:222,
    accion:()=>{console.log("hola soy Jory")}
}
```
### acceder a un elemento del objeto
### metododos
