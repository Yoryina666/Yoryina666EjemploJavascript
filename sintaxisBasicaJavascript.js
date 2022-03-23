function tiempo(){
    var d = new Date();
    var horas = d.getHours().toString();
    var minutos = d.getMinutes().toString();
    

    if (minutos.length == 1) {
        minutos = "0" + minutos;
    }
    var segundos = d.getSeconds().toString();
    if (segundos.length == 1) {
        segundos = "0" + segundos;
    }
    document.forms[0].reloj.value = horas + " : " + minutos + " : " + segundos;
}

function bienvenida(){
    alert("Bienvenid@ a nuestra página");
}

function confirmacion() {
	var pregunta = confirm("¿Desea visitar la página de Boostrap?")
	if (pregunta){
        window.location = "https://getbootstrap.com/docs/5.0/getting-started/introduction/";
	}
	else{
		alert("Quizás en otro momento...")
	}
}

function materiales() {
    var materials = ["Pincel", "papel", "marcadores", "juego de geometría"];
    for (var i = 0; i < materials.length; i++) {
        document.write(materials[i] + "<br>");
        
    }
}

function borrar() {
    document.getElementById("conteo").innerHTML = "";
    var valor = document.getElementById("texto").value = "";
    document.getElementById("contandoLetras").innerHTML = "";
    var valor2 = document.getElementById("texto2").value = "";
}

function aceptarColores() {
    var color;

    do {
        color = prompt("dame un color (escribe rojo sin espacios para salir)", "")
    } while (color != "rojo")

}


