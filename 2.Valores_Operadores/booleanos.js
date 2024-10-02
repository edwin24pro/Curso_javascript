// en ke cadso del operador && su resultado sera verdadero solo si ambos valores son verdaderos.
console.log(true && false)
console.log(true && true)
//OBSERVACION: en caso existia un valor verdadero y uno falso devolvera el valor falso.
console.log(0 && 'hola')
//OBSERVACION: en caso que los dos sean verdadero devolvera la segunda opcion
console.log('hola' && 'mundo')
//OJO: Los valores 0, NaN y una cadena vacia "" son considerados falso.
//En le caso del operador || produce verdadero si cualquiera de su valores datos es verdaderos. (inversa de &&)
respuesta = 'te devuelve los ositos tiernes'
console.log(respuesta || 'tu busqueda no existe')
console.log(false || false)
console.log(true ||false)
// En el caso del operador ! invierte el valor dado
console.log(!true)
console.log(!false)
console.log('hola' in ['hola', 'hola'])