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
````

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
attr:{class:"parrafo},
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
}
]
}
]
}
```

Dom a demas de realizar eltrabajo de convertir un archivo `HTML`en un objeto de javascript, nocs ofrese una `API` (application programming interface) o interfaz de programacion de aplicaciones.
## Selector
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

> [!NOTE]
> Tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas-que nos permite a travez de palabras reservadas darle un estilo o signioficado al contenido de las etiquetas). La primeratecnologia fue `xml`  despues nace `html`, despues la ultima genertacion de tecnologias de  marcado de texto `markdown`.
