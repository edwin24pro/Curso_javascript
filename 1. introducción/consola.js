console.time("Tiempo")
console.timeEnd("Tiempo")
//para mostrar texto plano sin formato
console.log("texto plano")
//evalucion de valores y muestra el resultado
console.log(3+4)
//notificación de informacion
console.info("aviso para hoy")
//notificacion de error
console.error("error")
//notificacion de advertencia
console.warn("esta cerca")

//mensaje por consola de gestion de tiempo
console.time("Tiempo")
edad = 20
if (edad >=10){
    console.log("eres mayor de edad")
}else {
    console.log("eres pulpin")
}
console.timeEnd("Tiempo")
//ejemplo
let i=0
for (i;i<=100;i++){
    console.log(i)
}
//mensaje de tipo tabla
console.table("eres una tabla y edwin es un clavo y orlando es virgen")
lenguajes = [
    {nombre_lenguaje:"javascript", extension:".js"},
    {nombre_lenguaje:"python", extension:".py"},
    {nombre_lenguaje:"php", extension:".php"}
]
console.log(lenguajes)
console.table(lenguajes)