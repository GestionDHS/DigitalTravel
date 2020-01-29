// PASO 1-A y PASO 1-B: OBTENIENDO DATOS & CONFIRMANDO RESERVA
function reservarVuelo() {
    var datosObtenidos = obtenerDatos();
    var confirmacionUsuario = confirm(datosObtenidos);
    //console.log(confirmacionUsuario);
    if (confirmacionUsuario == true) {
        document.getElementById("parrafoFinal").innerHTML = "Muchas gracias, los pasajes han sido reservados";
        document.getElementById("chat").classList.remove("oculto");
        ofrecerHotelesPorChat();
    } else {
        document.getElementById("parrafoFinal").innerHTML = "Lo sentimos, su reserva ha sido cancelada";
    }
}

// PASO 2-A: DESPLEGAR MENU
function abrirPanel (){
  document.getElementById("panelLateral").style.width = "280px";
}

function cerrarPanel(){
  document.getElementById("panelLateral").style.width= "0px"
}

// PASO 2-B: ALTERNAR SECCIONES
function abrirSeccionReservas(){
  document.getElementById("reservas").style.display="block";
  document.getElementById("notas").style.display="none";
}
function abrirSeccionNotas(){
  document.getElementById("reservas").style.display="none";
  document.getElementById("notas").style.display="block";
}

// PASO 2-C y PASO 3-A: AGREGAR TEXTO Y COLOR (NOTAS SIMPLES & NOTAS CON TARGET)
function cargarCaja(){
  var textoIngresado = prompt("Ingresa un recordatorio");
  var colorIngresado = prompt("Ingresa un color");
  var confirmacionUsuario = confirm("¿Estás seguro?");
  if(confirmacionUsuario == true){
    event.target.innerHTML = textoIngresado;
    event.target.style.backgroundColor = colorIngresado;
  }
}
// PASO 3-B: MODOS DE MI WEB APP
function toggleMovimiento(){
    document.getElementById("notas").classList.toggle("floatingActivado");
}

function toggleContraste(){
    document.body.classList.toggle("dark");
}

// PASO 4-A: DESPLEGAR EL CHAT
function mostrarOcultarChat(){
  document.getElementById("chat").classList.toggle("oculto");
}

// PASO 4-B: ENVÍO DE MENSAJES
function enviarMensajeChat(){
  var texto = document.getElementById("inputMensaje").value;
  document.getElementById("inputMensaje").value = "";
  imprimirMensajeUsuario(texto);
  recibirRespuestaChatbot(texto);
}
