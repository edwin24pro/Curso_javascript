## Indice
- [Funciones](#funciones)
  - [estructura de una funcion (como se cre una funcion)](#estructura-de-una-funcion-como-se-cre-una-funcion)
  - [Tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
  - [Argumentos y Parametros posicionales](#argumentos-y-parametros-posicionales)
  - [Argumento  y Parametros  Nominales](#argumento--y-parametros--nominales)
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