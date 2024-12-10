let imput=document.querySelector("#tarea")
let buton=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

buton.addEventListener("click", ()=>{
    let li=document.createElement("li")
    li.textContent=imput.value
    ul.appendChild(li,`<buton>borrar</buton>`)
    console.log(imput.value)
    imput.value=""
})