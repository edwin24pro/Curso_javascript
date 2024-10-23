# Esdtructura del programa
## Indice
- [Esdtructura del programa](#esdtructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y declaraciones](#expresiones-y-declaraciones)
  - [Bindings (enlaces)](#bindings-enlaces)
  - [El entorno](#el-entorno)
  - [Control de flujos](#control-de-flujos)
    - [Ejecucion Condiconal](#ejecucion-condiconal)
    - [Bucles](#bucles)
## Interaccion basica con el usuario
  Podemos interactuar con el usuario desde JavaScript utilizando un método sencillo que biene implementado en los navegadores.
  El metodo es conocido como `windows` o el metodo de ventana este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
  **alert** - esta funcion nos muestra un mensaje en pantalla.
  ```js
  windows.alert('mensaje')
  ```
  **confirm** -Preguntar al usuariio y ofrecer dos botones que se traducen en valores booleanos `aceptar` (true) y `cancelar` o `cerrar` (false).
  ```js
  window.confirm("quieres ser mi enamorada?")
  //Si si deseamos capturar la respuesta almacenamos 
  ```

  ## Expresiones y declaraciones
  - **Expresiones** - En javascript un fragmento de codigo que produce un valor es llamada `expresion`, tambien se dice que una `expresion` es el fragmento de una oración `oracion`.
  ```js
  1
  'hola'
  true
  !false
  ```
  **Declaraciones** - En javascript es una oracion.
  ```js
  let emocion = !false
  !true;
  ```
  ## Bindings (enlaces)
  Cuando creamos un valor estos valores son volatiles solo existen en la ejecución del programa y solo cuando son llamados.
  El bindings o enlace es la manera que javascript recuerda los valores y mantiene un estado interno asi como la reutilización de valores.
  **Como usamos los bingings en javascript**
  Primero debemos utilizar la palabra reservada `keyword` o `let`, despues devemos darle un nombre para indentificar el enlace luego asignarle el valor.
  ```js
  34
  let edadPersona=34 //apunta a muchos valores
  ```
  ```js
  34
  const edadPersona=34 //apunta a un solo valor
  ```
  >[!NOTE]
> **Que nombre ponerle a nuestro enlace** - El nombre de un enlace debera describir el valor al que esta enlazado y debera estar escrita en `camelCase` 
```js
//correcto
let fechaAhora = '20240305'
```

## El entorno
El entorno es conocido como el momento en el que se ejecuta o inicia un arachivo javascript.
El entorno al crearce no se crea vacío dentro del entorno se crearan la coleccion de enlaces y valores.

> **Tarea** - Averiguar mas sobre la ejecucion en linea de los entornos en javascript.

## Control de flujos
Una sentencia se ejecuta como si fuera una historia de arriba abajo. ejm.

```js
let elNumero = prompt('elige un numero')
console.log('tu numero es la raiz cuadrada de:'+ elNumero * elNumero)
//primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero
```
### Ejecucion Condiconal
hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamo mostrar segun una condición.

**Como Creamos una condicion en js:**

la ejecucion condicional se crea con la palabra reservada (keyword) `if` a continuacion de una `condicion` en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.

- **condición simple `if`**

```js
let comparacion=5>4
if true{
  prompt("escribe tu nombre")
}
```
- **Condicion de doble evaluacion**
  Existen cosas en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso, ejecutando condicional de dos caminos.
  ```js
  let edadPersona = 16
  if (edadPersona >= 18){
    console.log("eres mayor de edad")
  }
  else{
    console.log("eres menor de edad")
  }
  ```
  - **Condicion multiple `if` `else if`**
  Se utiliza cuando se tiene que evaluar y devolver variaas opciones o multiples respuestas.
  ```js
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
  ```
  - **Condicion multiple `switch`**
javascript dispone de una opcion para crear estructuras condicionales multiples. `switch` permite crear estructuras mas optimizadas para cubrir un amplio abanico de posibilidades.
```js
let edad= Number(promp("ingrese su edad"))
switch (edad){
case 4:
  console.log("tienes 4 años")
  break
case 6:
  console.log("tienes 6 años")
default:
  console.log("tienes: ",edad)
  break
}
```
### Bucles
Necesitamos una manera de ejecutar un fragmento de codigo multiples veces, aesta forma de control de flujo se llama `bucle`
para crear un bucle tenemos dos formas de hacerlo.
1. `While` -para hacer uso de este bucle primero debemos usar la palabra clave `While` este a su ves como el if devera tener una condicion una `condicion` si esta condiciion  sea falsa el bucle no sera ejecutado, al igual que el if luego de darle la condicion
2. `for` -Esta seria la forma mas abrevisada de creear un bucle en javascript, en el caso de `while` necesitamos una variable contador luego la condicion y finalmente el aumento del contador, en el caso de `for` estos tres pasos se realizan en una sola linea.
> [!TIP]
> `while` se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion requeriara de una intervencion externa. `for` se usa cuando sabemos la cantidad de veces que deceamos ejecutar un codigo.

> [!TIP]
> Para terminar un bucle se hace uso de la palabra reservada `break`.