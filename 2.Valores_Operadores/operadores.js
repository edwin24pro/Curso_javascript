//suma
console.log(4+5)
//resta
console.log(8-4)
//multiplicacion
console.log(5*2)
//division
console.log(5/2)
//potencia
console.log(4**5)
//modulo
console.log(4%2)
/* realizar la operacion de sumar 4 y 100 y luego multiplicar el resultado por 11
*/
//Para evitar recordar la precedencia se recomienda hacer uso de la agrupacion de operaciiones.
console.warn("resultado:",(4+100)*11)
//EJERCICOS
console.log((1*(2-1))*((2+1)*1))
//console.log(1+(2*(2+3))(3+(4*(3+4+(2/1)))))
//console.log((4/(4+4)))
console.log((1/(2+3))/(1/(1-2)))
console.log((1+(3/(1+2+(2/1))))/(1+(2/(3+4))))
console.log((1+2+3)/(3+(2/1)))
console.log((1+2+(4/(4*3)))/(1+2*(4/2)))
console.log((2+(4+5)+5)/(2))
console.log(((2/1)+(4/2))/((4/2)/(6/3)))
console.log(3+((4+((4+2)/(4+6)))/(3+(4/2))))
console.log(1+2+(3/4)+(3/(4-2)/(2/(4+2))))
//Operador Incremento
num = 2
console.log(num++)
console.log(++num)
console.log(num)
//ejm
//Comparacion de tiempo de ejecucion
console.time('calcular')
num = 3
//Operador de incremento
console.log(num, ++num)
console.timeEnd('calcular')

console.time('calcular')
num = 3
console.log(num++)
console.log(num)
console.timeEnd('calcular')
//Operador de decremento
num = 3
console.log(num--)
console.log(num)
num = 3
console.log(--num)

