//Ejercicio con clases
// diseñar una clase para mi entidad celular
// tendra como atributos numero, marca, modelo, capacidad de batería
// tendra como metodos encender, apagar, llamar, colgar, enviar mensaje.
class Celular{
    constructor(numero,marca,modelo,caBatery){
        this.numero=numero,
        this.marca=marca,
        this.modelos=modelo,
        this.capacidadBateria=caBatery
    }
    encender(){return "Encendiendo el celular"}
    apagar(){return "apagando el celular"}
    llamar(){return "Llamando a tu corazon.."}
    colgar(){return "llamada terminada"}
    enviarMensaje(){return "Enviando un nuevo mensaje para tu cerebro"}
}
//instanciamos la clase celular
let celularUno=new Celular('9667565','motorola','Mb5td','50000 mAh')
console.log(celularUno.apagar())