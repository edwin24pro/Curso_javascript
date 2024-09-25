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