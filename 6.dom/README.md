# Indice
- [Indice](#indice)
- [Dom-Document Object model](#dom-document-object-model)
  - [Selector - recorriendo el DOM](#selector---recorriendo-el-dom)
  - [Manipulación de DOM](#manipulación-de-dom)
  - [Propiedades de los elmentos DOM](#propiedades-de-los-elmentos-dom)
  - [Acciones con elemnetos en el DOM (averiguar)](#acciones-con-elemnetos-en-el-dom-averiguar)
# Dom-Document Object model
Modelo de documento0 de objeto
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos XML y HTML.
El domtransforma el aravhivo HTMLen un arbol de nodos jerarquico, facilmente manipulables.
ERl dom convierte todo el contenido del arvhivo HTML en un objeto de javascript.

**mi archivo index.html**
```html
<body>
  <h1 id="titulo">titulo</h1>
  <p class="parrafo"> este es la descripcion de tu pagina</p>
  <ul>
    <li>primer elemento</li>
    <li>segundo elemento</li>
    <li>tercer elemento</li>
  </ul>
</body>
```

**mi archivo script.js**
```js
document:{
Element:body,
attr:null,
text:null
child:[{
Element:h1,
attr:{id:"titulo"},
text:"titulo",
child:null
},
{
Element:p,
attr:{class:"parrafo"},
text:"este es el la descripcion de mi pagina",
child:null
},
{
Element:ul,
attr:null,
text:null,
child:[{
Element:l1,
attr:null,
text:"primer elemento",
child:null
},
{
Element:l2,
attr:null,
text:"segundo elemento",
child:null
},
{
Element:l3,
attr:null,
text:"tercer elemento",
child:null
}
]
}
]
}
```

Dom a demas de realizar eltrabajo de convertir un archivo `HTML`en un objeto de javascript, nocs ofrese una `API` (application programming interface) o interfaz de programacion de aplicaciones.
## Selector - recorriendo el DOM
Los selectores nos permiten optener o capturar un etiqueta o varias etiquetas `hmtl` incluyendo sus atributios contenido e hijossi lostuviera.
Los selectoresque podemosutilizzar son variados podemos capturar etiquetas a travez de sus atributos como da el nombre de la etiqueta misma.
Losselectore sson funciones si hblamos de poo entonces se puede decir que son `metodos`,y son los siguientes:
- **getElementById** -Devuelve un elemento  (etiqueta) quetwnga un id especifico.
```html
<p id="uno"> primer texto</p>
<p id="dos"> Segundo texto</p>
```
```js
let parrafoSegundo=document.getElementById("dos")
```
- **getElementById** - Devuelve un elementoque tenga una clase específica.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=document.getElementByClasName("parrafo")
```
- **QuerySelector** - Devuelve el primer elemento que conincida con el selector ingresado puede ser un id, class, name o tag (etiqueta).
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo =document.QuerySelector("#titulo")
let primerParrafo=document.QuerySelector(".parrafo")
let segundoParrafo=primerParrafo=document.QuerySelector("#parrafo_dos")
let segundoParrafo=primerParrafo=document.QuerySelector("h2")
```
**Averiguar que otros selectores o metodos para recorrer el DOM tiene javascript**
```js
getElementsByTagName(nombreDeEtiqueta): Selecciona elementos por su etiqueta  
querySelectorAll(selectorCss): Selecciona uno o más elementos que coincidan con el selector CSS proporcionado 

```
## Manipulación de DOM 
- **CreateElement** - Este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** - Nos permite hacer hijo un elemento dentro de otro.
```js
let titulo=document.createElement("h1")
let body=QuerySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elmentos DOM
- **className** - permite setear o capturar el nombre de la clase que tenga un elmento.
- **id** - lo mismo que className  pero con elatributo id.
- **innerHTML** - devuelve o  permite insertar texto en un elemento.
- **innercontent** - Nos permite agregar o modificar el contenido de unn elemento.
-  **value** - Nos permite optener o setear valores de un elemento `ìnput`.
## Acciones con elemnetos en el DOM (averiguar)
Modificar el contenido de un elemento
Cambiar el texto o contenido HTML interno usando innerHTML o textContent.

```js
const titulo = document.getElementById('titulo');

// Cambiar texto
titulo.textContent = 'Hola, Mundo!';

// Cambiar contenido HTML
titulo.innerHTML = '<strong>¡Hola, Mundo!</strong>';
```
Cambiar atributos de un elemento
Usar setAttribute, getAttribute, y removeAttribute.

```js
const enlace = document.querySelector('a');

// Cambiar el atributo href
enlace.setAttribute('href', 'https://example.com');

// Obtener el valor de un atributo
console.log(enlace.getAttribute('href'));

// Eliminar un atributo
enlace.removeAttribute('target');
```
Cambiar estilos CSS
Modificar estilos directamente o agregar clases con classList.

```js
const caja = document.querySelector('.caja');

// Cambiar estilos directamente
caja.style.backgroundColor = 'blue';
caja.style.color = 'white';

// Agregar, quitar o alternar clases
caja.classList.add('resaltado');
caja.classList.remove('resaltado');
caja.classList.toggle('resaltado'); // Alterna la clase
```
Agregar o eliminar elementos
Crear nuevos elementos con createElement y agregarlos al DOM con appendChild o remove.

```js
const lista = document.querySelector('#lista');

// Crear un nuevo elemento
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent = 'Elemento Nuevo';

// Agregarlo al DOM
lista.appendChild(nuevoElemento);

// Eliminar un elemento
const primerElemento = lista.querySelector('li');
primerElemento.remove();
```
Escuchar eventos
Añadir y manejar eventos como clics, movimientos del mouse, etc.

```js
const boton = document.querySelector('#boton');

// Agregar un evento de clic
boton.addEventListener('click', () => {
  alert('¡Botón clickeado!');
});

// Remover un evento
const handler = () => console.log('Evento activado');
boton.addEventListener('mouseover', handler);
boton.removeEventListener('mouseover', handler);
```
Navegar por elementos relacionados
Acceder a elementos padres, hijos, o hermanos.

```js
const item = document.querySelector('li');

// Acceder al elemento padre
console.log(item.parentElement);

// Acceder al primer hijo
console.log(item.firstElementChild);

// Acceder al siguiente hermano
console.log(item.nextElementSibling);
```

> [!NOTE]
> Tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas-que nos permite a travez de palabras reservadas darle un estilo o signioficado al contenido de las etiquetas). La primeratecnologia fue `xml`  despues nace `html`, despues la ultima genertacion de tecnologias de  marcado de texto `markdown`.
