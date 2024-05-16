/**
 * Modifique el ejercicio anterior para mostrar un mensaje (luego del mensaje del ejercicio 1), 
 * que le diga al usuario cuántos días ha vivido desde que nació.  
 */
//Modifique el ejercicio anterior para que el usuario sea quien ingrese sus datos.  
const nombrePrompt = prompt("Ingrese su nombre: ");
const apellidoPrompt = prompt("Ingrese su apellido: ");
const edadPrompt = prompt("Ingrese su edad: ");

const mensaje = `Su nombre es ${nombrePrompt} ${apellidoPrompt} y tiene ${edadPrompt} años`;
const diasVividos = parseInt(edadPrompt) * 365;
const mensajeDiasvividos = `Usted ha vivido ${diasVividos} días`;

alert(mensaje);
alert(mensajeDiasvividos);


const parrafo = document.createElement("p");
parrafo.textContent = mensaje; 
document.querySelector("body").appendChild(parrafo);

const parrafodiasvividos = document.createElement("p");
parrafodiasvividos.textContent = mensajeDiasvividos; 
document.querySelector("body").appendChild(parrafodiasvividos);