//Cree tres variables con datos personales al azar y cuando cargue la página web, muestre un mensaje de bienvenida para el usuario.
const nombre = "John";
const apellido = "Doe";
const edad = 33;

const mensaje = `Su nombre es ${nombre} ${apellido} y tiene ${edad} años`;

alert(mensaje)
const parrafo = document.createElement("p");
parrafo.textContent = mensaje; 
document.querySelector("body").appendChild(parrafo);