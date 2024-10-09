# Esdtructura del programa
## Indice
- [Esdtructura del programa](#esdtructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y declaraciones](#expresiones-y-declaraciones)
  - [Bindings (enlaces)](#bindings-enlaces)
  - [El entorno](#el-entorno)
  - [Control de flujos](#control-de-flujos)
    - [Ejecucion condicional](#ejecucion-condicional)
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
### Ejecucion condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.