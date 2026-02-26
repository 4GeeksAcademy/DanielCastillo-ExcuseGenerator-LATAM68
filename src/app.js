import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let sujetos = ["Mi hermano", "Mi perro", "El internet", "Mi alarma"];
  let verbos = ["Se cayo", "Dejo de funcionar", "Se retraso", "Me dejo tirado"];
  let conectores = ["en el momento en que","apenas","antes de que"];
  let acciones = ["iba a entregarte el trabajo","estaba subiendo el archivo","salía de casa"];
  let extras = ["y no tuve forma de recuperarlo","y me quedé sin tiempo","y se perdió todo"];
  let tiempos = ["hoy","esta mañana","hace un rato","anoche","hace 10 minutos","justo ahora"];
  let cierres = [", ya estoy solucionandolo.",", te paso avances en 30 min.",", estoy subiendo un fix."];

function generarExcusa() {

  let miSujetos  = sujetos[Math.floor(Math.random()    * sujetos.length)];
  let miVerbos = verbos[Math.floor(Math.random() * verbos.length)];
  let miConectores    = conectores[Math.floor(Math.random()   * conectores.length)];
  let miAcciones = acciones[Math.floor(Math.random()   * acciones.length)];
  let miExtras = extras[Math.floor(Math.random()   * extras.length)];
  let miTiempos = tiempos[Math.floor(Math.random()   * tiempos.length)];
  let miCierres = cierres[Math.floor(Math.random()   * cierres.length)];
    return `${miSujetos}  ${miVerbos}  ${miConectores} ${miAcciones} ${miExtras} ${miTiempos}${miCierres}`; 

}

      let excuseElement = document.querySelector('#excuse');
      excuseElement.innerHTML = generarExcusa();
};
