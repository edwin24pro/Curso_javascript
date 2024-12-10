// Aprendiendo dom
// let newElement=document.createElement("div")
// newElement.id="miID"
// newElement.className="miClase"
// let favoritColor = prompt("que color prefieres rojo o azul")
// if (favoritColor == "rojo"){
//     newElement.style="rojo"
// }
// else if (favoritColor=="azul"){
//     newElement.style="azul"
// }
// //newElement.style="background:red;width:200px; height:200px"
// let body=document.querySelector("body")
// body.appendChild(newElement)

let mensaje=document.querySelector("#Button-id")

mensaje.addEventListener("click",()=>{
    alert("funciona")
})