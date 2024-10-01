**Temario**
- [valores](#valores)
  - [datos primitivos](#datos-primitivos)
    - [-Numeros(Numbers)](#-numerosnumbers)
- [datos primitivos](#datos-primitivos-1)
  - [numericos (Number)](#numericos-number)
    - [entero](#entero)
    - [decimal](#decimal)
    - [notacion científica](#notacion-científica)
    - [numeros especiales](#numeros-especiales)
    - [Aritmetica (operadores aritmeticos)](#aritmetica-operadores-aritmeticos)
    - [Cadenas](#cadenas)
    - [Concanetacion](#concanetacion)
    - [Plantillas literales](#plantillas-literales)
    - [Valores Boleanos](#valores-boleanos)
## valores
Cuando nosotros programamos haccemos uso de la `memoria de trabajo` también conocido como la memoria RAM. Para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, javascript orndena los bits en pequeñas partes o piezas de información a esto se le conoce como `valores`.
 Cada valor tiene una funcionalidad distinta puede ser un número un texto o una funcion.
 Cuando hablamos de tipos de datos en javscript nos referimos a su presentacion binaria y al tipo de valor que usamos.
 ### datos primitivos
 Son aquellos datos que ya existen no puedn ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deceamos darle.
 Los datos primitivos en javascript son
 #### -Numeros(Numbers)
 Los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hacer el llamado de este valor de la siguiente manera.
 ```js
 //estamos usando un patron de bits para el numero 20 que existira dentro de la memoria de trabajo.
 20
 ```
 - Numero de punto flotantte decimal fracción
 ```js
 2.7
 0.
 .0
 ```
 ```js
 //dato numero de tipo entero
 //entero positivo
 23
 //entero negativo
 -23
 //decimal positivo
 .0
 //decimal negativo
 -3,6
 ```
 > [!TIP]
 > Cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todo numero.
 - Numero de notación cientifica.
  ```js
  //0.00000099.8
  2.99e8
  ```
  > [!WARNING]
  > Cuando javascript realiza operacion con numeros enteros el resultado siempre sera exacta, cuando realiza operacion con numero decimales el resultado perdera presicionporque solo tiene 64 bit para almacenar el numero esto suele ocurrir con resultados cuyos decimales sean infinitivos como el caso el numero PI.\
  > **Es nuestra responsibilidad como programadores hacer el uso de los deccimal con aproximaciones para evitar errores**
  ---
  > [!TIP]
  > Cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todos numero son almacena como decimal positivo.
  - Tipos de datos (conocido valores en jvascript)
  - Operadores.
  ## datos primitivos
  ### numericos (Number)
  #### entero
  #### decimal
  #### notacion científica
  #### numeros especiales
   En Javascript existe tres valores de tipo número que se considera un dato primitivo númerico de tipo especial
   ```js
   //positivo infinito
   Infinity
   //negativo infinito
   - Infinity
   //sin nombre
   -NaN
   //Cuando el resultado de una operacion es matematicamente imposible
   ```
   #### Aritmetica (operadores aritmeticos)
La principal operación quese puede hacer con numeros es la aritmetica.
Para esto tenemos los operadores aritmeticos como:
- Suma (operaion de suma `+`)
- Resta (operacion de resta `-`)
- multiplicacion (operador multiplicación `*`)
- Division (operador de division `/`)
- potencia (operador de potencia en javascript `**`)
- Modulo (`%`)
**Podemos agrupar operaciones con parentesis() las operaciones que este entre**
#### Cadenas
El siguiente tipo de dato primitivo es la `cadena` - `string`.
¿Para que se usan las cadenas en javascript?
- Para representar texto
Se escribe encerrado su contenido entre comillas;
```js
"soy un texto" //comillas dobles
'tambien soy untexto' //comillas simples
`yo tambien soy` //acento grave
```
**Problema** - como representamos un texto entre comillas.
```js
//Uso de las commillas dobles
console.log("soy 'cadena'")
//Usoo de las comillas simples
console.log('soy "cadena"')
//Uso del acento grave
console.log(`'soy' "cadena"`)
```
Otra manera de hacer lo antes menciionado es haciendo es uso de la barra invertida `\` tambien concida como `caracter de escape`, hacer uso de este caracter indica que el caracter indica que el caracter posterior tendra unn significado especial.
```js
"de este texto solo \"esta palabra estara en comillas\""
```
**problema** - deseamos agregar un salto de linea  en nuestro texto.
Antes de la incorporacion de es6 en el uso de acentos graves se utilizaba el caracter de escape `\`.
```js
//salto de linea usando caracter de escape
"esto es /n mejor"
```
**Problema** - deseo tabular un texto.
```js
//tabulacion usando acento grave
`
  uno\n
  dos\n
  tres
`
```
#### Concanetacion
El unico opereador aritmético que puede ser usado por cadenas en el operador de suma (+) puede ser usado entre dos a mas cadenas y pasa a llamar operador de concanetacion, lo que realizar es unir cadena  en una sola.
```js
//string concatenado
"hola"+" "+"mundo"
```
#### Plantillas literales
Las plantillas literales mencionando anteriormente con el nombre de ascentos graves son usadas para mostrar texto literal, también nos permite ejecutar codigo javascript dentro de una plantilla literal el codigo o resultado de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion en que se encuentre.
Par hacer uso de esta funcionalidad debemos usar, la siguiente expresion.
```js
//Usando plantillas literales
'la suma de 1+1 es ${1+1}'

```
> [!TIP]
> Se dice literal porque con el formato que codificamos sera mostrado de esa misma forma en la consola.
> #### Operadores unarios
> No todo los operadores son simbolos, algúnos se escriben como palabras.
> Un ejemplo es el operador `typeof`, es el operador que produce un valor de cadena que indica el tipo del valor que le proporcionamos.
>`operadores binarios` se les conoce porque opera sobre dos valores `2*5`
`operador unario` por que solo trabja con un valor.
```js
//Para ver su funcionalidad o el valor que genera siempre debemos mostrarlo en un console
console.log(typeof 5)
```
#### Valores Boleanos
Este tipo de dato primitivo es util cuando tenemos un valor que distinga solo entre dos posibilidades, como `si` y `no`

Para este proposito, JavaScript tiene un tipo de dato `Booleano`,  que tiene solo dos valores, `true`
1. **que formas de producir valores booleanos tenemos?**
Los operadores de comparación son los siguientes:
- Mayor que (<),
- Menor que (>),
- Mayor o igual que (>=),
- Menor o igual que (<=),
- Igual a (==),
- Extrictamente igual (===)
- No es igual a (!=)
  2. **Operadores lógicos**