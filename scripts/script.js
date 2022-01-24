//Crear 4 funciones
// 1. Extraer datos

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  captureData();
  listarObj();
});
// 2.Capturar datos;
const captureData = () => {
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let fecha = document.getElementById("fecha").value;
  let cantidad = document.getElementById("cantidad").value;
  //
  let id = localStorage.length;
  // crear arreglo vacio

  /* let newObj = {"id":id,"nombre":nombre,"precio":precio,"fecha":fecha,"cantidad":cantidad
    } */
  let newObj = { precio, nombre, fecha, cantidad };

    //Especificamos que el id no exista como llave previa, si es asi, le sumamos un digito. 
  Object.keys(localStorage).forEach((key) => {
    if(id == key){
        id++;
    }
    console.log("key", key);
  });
  window.localStorage.setItem(id, JSON.stringify(newObj));
  alert("Guardado correctamente");
  limpiarForm();
  
};
const limpiarForm = () => {
    document.getElementById("nombre").value = ""
    document.getElementById("precio").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("cantidad").value = ""
}

const removeRow = (id) => {
  console.log("se ingreso a eliminar");
  window.localStorage.removeItem(id);
  listarObj();
};

const listarObj = () => {
  /* let listaObj = JSON.parse(window.localStorage)
    console.log(listaObj); */
  let lineaTexto = document.getElementById("listarAlimento");
  /* let iterador = localStorage.length; */

  lineaTexto.innerHTML = "";
  if (localStorage.length <= 0) {
    return console.log("No hay objetos guardados");
  } else {
    //Object keys, nos devuelve las llaves que existen en el objeto
    //Asi que evitamos caer en los null
    Object.keys(localStorage).forEach((key) => {
      //console.log(localStorage.getItem(key));
      let obj = localStorage.getItem(key);

      obj = JSON.parse(obj);
      console.log(obj);
      let { nombre, precio, fecha, cantidad } = obj;
      lineaTexto.innerHTML += `
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${fecha}</td>
            <td>${cantidad}</td>
            <td><button class="btn btn-danger" onclick="removeRow(${key})" >Eliminar</button></td>
            `;
    });
  } /* console.log(JSON.parse(window.localStorage.getItem(1))); */
};
window.onload = listarObj();
