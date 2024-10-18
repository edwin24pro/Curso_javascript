//Primer ejercicio
numero = prompt("Escribe el primer numero")
numerosDos = prompt("Escribe el segundo numero")
if (numero>numerosDos){
    console.log("El primer numero es mayor, ",numero)
}else{console.log("El segundo numero es mayor, ", numerosDos)}
if ((+numero)*(+numerosDos)>100){
    console.log("El producto es mayor a 100")
}

//segundo ejercicio
password=prompt("Ingrese la contraseña")
if (password=="arturito"){
    console.log("Bienvenido")
}
//tercer ejercicio
numeroPrimo = prompt("Ingrese un numero")
if (numeroPrimo%2==1 || numeroPrimo==2){
    console.log("Es un numero primo")
}else{
    console.log("no es un numero primo")
}