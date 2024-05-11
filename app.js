
let tiempo=5000;
let tipoContador= document.getElementById()

// Obtener el elemento del temporizador
let tiempoMostrado = document.getElementById('textotimer');

function contador(){
switch(tipoContador)
{
    case 1:
        console.log("Empieza el contador de enfoque");
        tiempo=5000;
        break;
    case 2:
        console.log("Empieza el contador de descanso corto");
        tiempo=300;
        break;
    case 3:
        console.log("Empieza el contador de descanso largo");
        tiempo=900;
        break;
    default:
        console.log("No se ha seleccionado un tipo de contador");
        break;
}
}



// Definir el tiempo inicial en segundos (25 minutos)
var tiempoInicial = 25 * 60;

// Función para actualizar el temporizador
function actualizarTemporizador() {
  var minutos = Math.floor(tiempoInicial / 60);
  var segundos = tiempoInicial % 60;

  // Asegurar que los minutos y segundos siempre tengan dos dígitos
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  // Actualizar el contenido del temporizador
  timerDisplay.textContent = minutos + ':' + segundos;

  // Disminuir el tiempo restante en 1 segundo
  tiempoInicial--;

  // Si el temporizador llega a 0, detener el temporizador
  if (tiempoInicial < 0) {
    clearInterval(intervalID);
    timerDisplay.textContent = '00:00'; // Ajustar el tiempo a 00:00 si llega a 0
    alert('¡Tiempo terminado!');
  }
}

// Llamar a la función para actualizar el temporizador cada segundo
var intervalID = setInterval(actualizarTemporizador, 1000);

}