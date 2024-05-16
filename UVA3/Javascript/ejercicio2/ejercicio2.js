//Modifique el ejercicio anterior para que el usuario sea quien ingrese sus datos.  
const nombrePrompt = prompt("Ingrese su nombre: ");
const apellidoPrompt = prompt("Ingrese su apellido: ");
const edadPrompt = prompt("Ingrese su edad: ");

const mensaje = `Su nombre es ${nombrePrompt} ${apellidoPrompt} y tiene ${edadPrompt} años`;

alert(mensaje)
const parrafo = document.createElement("p");
parrafo.textContent = mensaje; 
document.querySelector("body").appendChild(parrafo);