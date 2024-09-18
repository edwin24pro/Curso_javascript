# Introducción
**Temario**
- [comentarios](#comentarios)
- [consola](#consola)
- [Naiming](#naiming)
## comentarios
Es la parte dentro de mi arcivo de codigo que noleído ni ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nueestro codigo, y en ocacionea¿s podemos usarlo para silenciar temporañmente partes del codigo *(comentar un código)*.
### Tipos de comentarios
**Una sola línes**
```js
/*
comentario de una sola línea
*/
```
**Multiples líneas**
```js
/*
comentario de multi linea
*/
```
**Js Doc**
```js
/**
*este es una linea
*esta es otra linea
*/
```
E ste tipo de comentario es muy usado para documentar el código, generalmente usado para la explicación
## Consola
### Tipos de mensajes por consola
#### 1. Notificadores
Mostrar un mensaje por consola.

```js
//mensaje de tipo plano
console.log("hola mundo")
//mensaje de tipo información
console.info("importante")
//mensaje de tipo advertencia
console.warning("no hagas eso")
//mensaje de tipo error
console.error("cuiudado")
```
#### 2. Gestion de tiempo
Este tipo de mensaje nos sirve para ver la duraracón de ejecucion de nuestro codigo y por optimizarlo para ser uso de esta herramienta tenemos qie iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la duracion  y finalmente terminar el time de la consola con `timeEnd()`.

#### 3. Tablas
Este tipo de mensaje por consola nos muestra la informacón en una tabla.
Solo formateara a los datos de tipo `array` y `objetos`.
```js
lenguajes = [
    {nombre_lenguaje:"javascript", extension:".js"},
    {nombre_lenguaje:"python", extension:".py"},
    {nombre_lenguaje:"php", extension:".php"}
]
```
[Para ver los ejemplos haga clic  aqui](./1.%20introducción/consola.js)
>[!TIP]
CLI interfaz por linea de comandos.\
GUI interfaz de usuariio gráfico.
## naiming
Es la tecnica para nombrar variables, funcion y clases dentro de unn lenguaje de programación.
Las variables tienen reglas muy especificas que debemos seguir a la hora de designar sus nombres.
### Usos incorectos
- Debemos usar nombres que expliquen que aporta esa.
- variable a nuestro codigo.
- Nose pueden usar espacio.
  
>[!WARNING]
>```js
>//Incorrecto
>con espacio=45
>//Incorrecto
>uso$=34
>//Incorrecto
>new_uso="fe"
>```
- No usar un numero delante.
### Usos correctos
- Debemos usar nombres que expliquen que aporta a esa variable a nuestro codigo.
- Usar camelCase.
  
>[!TIP]
>```js
>//correcto
>edadAlumno=45
>```