let ofertasVuelos = [
    {
        origen: "Argentina",
        destino: "Francia",
        precio:"30.000 ARS",
        mes: "Julio"
    },
    {
        origen: "Argentina",
        destino: "Holanda",
        precio:"38.000 ARS",
        mes: "Agosto"
    },
    {
        origen: "Argentina",
        destino: "Brasil",
        precio:"10.000 ARS",
        mes: "Febrero"
    }
];

let ofertasHoteles = [
    {
        cadena: "Milton Resort",
        estrellas: "4",
        descuento:"25%",
        codigo: "DhTrMilton"
    },
    {
        cadena: "DH Suites",
        estrellas: "5",
        descuento:"35%",
        codigo: "DhSuites"
    },
    {
        cadena: "Hostel Planet",
        estrellas: "3",
        descuento:"20%",
        codigo:"DhHstlPlt"
    }
];

    function agregarMensaje(msj, clase) {
        if (!msj) return;
        var li = document.createElement('li');
        if (clase == 'mio') {
            li.classList.add('mio');
        } else {
        li.classList.add('el');
    }
    li.innerHTML = msj;
    document.getElementById('lista-de-msjs').appendChild(li);
}

let estadoChat = 1;
let nombre=false;
function chatbotResponde(mensaje) {
    let chat = document.querySelector('#lista-de-msjs')
    if(mensaje.toLowerCase().includes("hola") || estadoChat == 1){
        estadoChat = 2
        agregarMensaje("Bien, escribe tu <b>nombre</b> para saber más.", "el")
    }else if(estadoChat == 2){
        nombre = mensaje.toString().charAt(0).toUpperCase() + mensaje.slice(1);
        if (nombre.replace(" ","") == ""){
          estadoChat=1;
          chatbotResponde("hola");
        } else {
          agregarMensaje("Bien, <b>"+nombre+"</b>. ¿Deseas conocer las últimas ofertas de vuelos?", "el")
          estadoChat = 3
        }
    }else if (estadoChat == 3 && (mensaje.toLowerCase().includes('si')||mensaje.toLowerCase().includes('sí'))) {
        agregarMensaje('Aquí tienes las ofertas de vuelo para ti: ', 'el');
        for (let i = 0; i < ofertasVuelos.length; i++) {
            agregarMensaje('Viaje con destino a <b>' + ofertasVuelos[i].destino + '</b>  desde ' + ofertasVuelos[i].origen + ' a tan solo ' + ofertasVuelos[i].precio + '. Promo válida para el mes de ' + ofertasVuelos[i].mes, 'el')
        }
        agregarMensaje('Espero haber sido de ayuda, <b>' + nombre + '</b>. ¡Buen viaje!');
    }else if (estadoChat==3) {
      agregarMensaje('Lo siento, <b>' + nombre + '</b>. Escribe "SI" para conocer las ofertas de vuelos.', 'el');
    } else if(estadoChat==4){
        let msg = "Gracias por tu reserva";
        if(nombre){
          msg += ", <b>" + nombre + "</b>";
        }
        msg += ". ¿Deseas conocer nuestras ofertas en alojamiento?";
        estadoChat=5;
        agregarMensaje(msg, 'el');
    } else if (estadoChat == 5 && (mensaje.toLowerCase().includes('si')||mensaje.toLowerCase().includes('sí'))){
      agregarMensaje('Aquí tienes las ofertas de hoteles para ti: ', 'el');
      for(let i = 0; i<ofertasHoteles.length; i++){
        agregarMensaje('Alojamiento '+ ofertasHoteles[i].estrellas +' estrellas en <b>' + ofertasHoteles[i].cadena + '</b> con ' + ofertasHoteles[i].descuento + ' de descuento ingresando el código <i>' + ofertasHoteles[i].codigo + '</i> con tu reserva.');
      }
    } else if(estadoChat==5){
        let msg = "Lo siento";
        if(nombre){
          msg += ", <b>" + nombre + "</b>";
        }
        msg += '. Escribe "SI" para conocer las ofertas de vuelos.';
        agregarMensaje(msg, 'el');
    }
    var objDiv = document.querySelector(".container");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function ofrecerHotelesPorChat(){
  estadoChat = 4;
  chatbotResponde("");
}

document.getElementById('mensaje').onkeydown= function(){
  if(event.keyCode == 13) {
  event.preventDefault();
  return false;
}
}

function imprimirMensajeUsuario(x){
  var formulario = document.querySelector('#mensaje');
  formulario.onsubmit = (e) => {
      e.preventDefault()
  }
  agregarMensaje(x,'mio');
}

function recibirRespuestaChatbot(x){
  chatbotResponde(x)
}


const dhPaises = ["Argentina", "Afghanistan", "Albania", "Brasil", "Bolivia", "Canadá", "Colombia", "Dinamarca", "Emiratos Árabes Unidos", "Finlandia", "Francia", "Grecia", "Holanda", "Inglaterra", "Japón", "Kenya", "Luxemburgo", "Marruecos", "Nicaragua", "Omán", "Paraguay", "Perú", "Rusia", "Singapur", "Taiwan", "Ucrania", "Vietnam", "Yemen", "Zambia"];

var sel1 = document.getElementById("origen");
var sel2 = document.getElementById("destino");
for (let i = 0; i < dhPaises.length; i++) {
    let opc1 = document.createElement("option");
    let opc2 = document.createElement("option");
    opc1.setAttribute("value", dhPaises[i]);
    opc2.setAttribute("value", dhPaises[i]);

    opc1.innerHTML = dhPaises[i];
    opc2.innerHTML = dhPaises[i];
    sel1.appendChild(opc1);
    sel2.appendChild(opc2);
}

document.querySelector('#origen option[value="Argentina"]').selected = true;
document.querySelector('#destino option[value="Francia"]').selected = true;


const form = document.getElementById("myForm");

function obtenerDatos() {
    let fields = document.querySelectorAll("#myForm>input");
    if (fields.length < 0) { return "Hubo un problema" }
    let validos = true;

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].checkValidity()) {
            flag = false;
            fields[i].style.backgroundColor = "#ffbcb8";
        } else {
            fields[i].style.backgroundColor = "#f2f2f2";
        }
    }

    if (!validos) {
        let tex = "Faltan datos importantes en el formulario.\n¿Está seguro/a de que desea confirmar esta reserva?"
        return tex;
    } else {
        let elemOri = document.getElementById("origen");
        let orig = elemOri.value;
        let elemDesti = document.getElementById("destino");
        let dest = elemDesti.value;
        let texto = "Gracias, sr./a " + fields[1].value.toUpperCase() + ", " + fields[0].value.toUpperCase() + ".\n ¿Desea confirmar el siguiente vuelo?" + "\n Partida: " + fields[2].value + "\n Origen: " + orig.toUpperCase() + "\n Destino: " + dest.toUpperCase();
        return texto;
    }

}

document.getElementById("formReservas").onsubmit = (e) => {
      e.preventDefault()
  }
document.getElementById("reservas").style.display="block";
document.getElementById("notas").style.display="none";
