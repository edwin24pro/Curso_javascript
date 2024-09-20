## valores
Cuando nosotros programamos haccemos uso de la `memria de trabajo` también conocido como la memoria RAM. Para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, javascript orndena los bits en pequeñas partes o piezas de información a esto se le conoce como `valores`.
 Cada valor tiene una funcionalidad distinta puede ser un número un texto o una funcion.
 Cuando hablamos de tipos de datos en javscript nos referimos a su presentacion binaria y al tipo de valor que usamos.
 ### datos primitivos
 Son aquellos datos que ya existen no puedn sser creados, actualizados ni eliminados solo pueden ser llamdos para el uso que deceamos darle.
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