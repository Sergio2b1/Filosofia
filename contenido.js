var cont = 0
alert("Bienvenido a mi página web sobre Historía de la Filosofía");
var a = prompt("¿Como te llamas?");
alert("Te haré un pequeño examen de 4 preguntas antes de entrar, respuestas cortas")
var b = prompt("¿Francisco de Quevedo fue un filósofo?");
if (b == "No") {
    cont++;
    alert("Es correcto. Tu puntacion total es " + cont + ".");
} else {
    cont--;
    alert("Es incorrecto.Tu puntacion total es " + cont + ".");
}
var c = prompt("¿Socrátes escribió Así habló Zaratustra?");
if (c == "No") {
    cont++;
    alert("Es correcto. Tu puntacion total es " + cont + ".");
} else {
    cont--;
    alert("Es incorrecto. Tu puntacion total es " + cont + ".");
}
var d = prompt("¿En qué periodo de la historía de la filosofía se encuentra Santo Tomás de Aquino?");
if (d == "Medieval") {
    cont++;
    alert("Es correcto. Tu puntacion total es " + cont + ".");
} else {
    cont--;
    alert("Es incorrecto. Tu puntacion total es " + cont + ".");
}
var e = prompt("¿Quién fue el maestro de Aristóteles?");
if (e == "Platón") {
    cont++;
    alert("Es correcto. Tu puntacion total es " + cont + ".");
} else {
    cont--;
    alert("Es incorrecto. Tu puntacion total es " + cont + ".");
}