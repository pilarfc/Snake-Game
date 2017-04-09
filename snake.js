
var vibora = document.getElementById("vibora");
var tablero = document.getElementById("tabla");
//var comidaVibora = document.getElementById("comida");
var posicionX = 0;
var posicionY = 0;
//var posicionXcomida = 10;
//var posicionYcomida = 10;
var desplazamiento = 25;


function viboraEnMovimiento (event) { // Esta estructura viene explicada en Mozilla.
  switch (event.which) {
    case 37:  // left
      posicionX = posicionX - desplazamiento;
      if (posicionX < 0) {
        perder();
      } else {
          vibora.style.marginLeft = posicionX + "px";
      }  // Do something for "arrow left" key press.
      break;

      case 39: // right
      posicionX = posicionX + desplazamiento;
      if (posicionX > 475) {
        perder();
      } else {
        vibora.style.marginLeft = posicionX + "px";
      }
      break;


      case 38: // up
      posicionY = posicionY - desplazamiento;
      if (posicionY < 0) {
        perder();
      } else {
        vibora.style.marginTop = posicionY + "px";
      }
      break;

      case 40: // down
      posicionY = posicionY + desplazamiento;
      if (posicionY > 475) {
        perder();
      } else {
        vibora.style.marginTop = posicionY + "px";
      }
      break;
  }
}

/*function comida (){

} */

function perder () {
  alert ("¡Perdiste! :( Vuelve a intentarlo.")
  detenerMovimiento();
}

function detenerMovimiento () {
    window.removeEventListener("keydown", viboraEnMovimiento);
}

function reiniciarJuego () {
  location.reload();
}


window.addEventListener("keydown", viboraEnMovimiento);
botonReiniciar.addEventListener("click", reiniciarJuego);
