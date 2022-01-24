//Crear 4 funciones
// 1. Extraer datos

let form = document.querySelector("form");
form.addEventListener("submit", e =>{ 
    e.preventDefault();
    captureData();
    listarObj();

})
// 2.Capturar datos;
const captureData = () => {
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let fecha = document.getElementById("fecha").value;
    let cantidad = document.getElementById("cantidad").value;
    let id = localStorage.length;
    // crear arreglo vacio
    
    /* let newObj = {"id":id,"nombre":nombre,"precio":precio,"fecha":fecha,"cantidad":cantidad
    } */
        
    let newObj = {precio,nombre,fecha,cantidad}
    id = toString(id);
    window.localStorage.setItem(id, JSON.stringify(newObj));
    console.log("Guardado correctamente");
}
const removeRow = (id) => {
    window.localStorage.removeItem(id);
    listarObj();
}
 

const listarObj = () => {
    /* let listaObj = JSON.parse(window.localStorage)
    console.log(listaObj); */
    let lineaTexto = document.getElementById("listarAlimento")
    let iterador = localStorage.length;
    lineaTexto.innerHTML = "";
    if (localStorage.length <= 0 ){
        return console.log("No hay objetos guardados");
    }  else { 
        for(let i = 0; i < iterador; i++){
       /*  if(JSON.parse(window.localStorage.getItem(i)) === null){
            i++;
        } */
         /*console.log(JSON.parse(window.localStorage.getItem(i))) */

        let {nombre,precio,fecha,cantidad} = JSON.parse(window.localStorage.getItem(i)) 
        lineaTexto.innerHTML += `
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${fecha}</td>
            <td>${cantidad}</td>
            <td><button class="btn btn-danger" onclick="removeRow(${i})">Eliminar</button></td>
            `
    }
   }   /* console.log(JSON.parse(window.localStorage.getItem(1))); */
}
window.onload = listarObj()
