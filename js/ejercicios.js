// Tarea clase pasada
// Ejercicio 1
let numero1 = 10;
let numero2 = 3;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero1 * numero2);
// Ejercicio 2
let nombre = "Max";
let apellido = "Verstappen";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
// Ejercicio 3
let gradosCelsius = 33;
let gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;
console.log(gradosCelsius + "°C");
console.log(gradosFahrenheit + "°F");
// Practico TP1
// Ejercicio 1
alert("un mensaje");
// Ejercicio 2
document.write("<h2>Hello World</h2>");
// Ejercicio 3
document.write(3 + 5);
// Ejercicio 4
let nombreUsuario = prompt("Escribe un nombre de usuario");
alert("Hola " + nombreUsuario);
// Ejercicio 5
let numero3 = parseInt(prompt("Dame un numero"));
let numero4 = parseInt(prompt("Dame otro numero"));
alert("El total es de: " + (numero3 + numero4));
// Ejercicio 6
let numero5 = parseInt(prompt("Dame un numero"));
let numero6 = parseInt(prompt("Dame otro"));
if (numero5 > numero6) document.write("<br>El numero mayor es el " + numero5);
else document.write("<br>El numero mayor es el " + numero6);
// Ejercicio 7
let numero7 = parseInt(prompt("Dame un numero"));
let numero8 = parseInt(prompt("Dame otro"));
let numero9 = parseInt(prompt("Dame uno mas"));
if (numero7 > numero8 && numero7 > numero9)
  document.write("<br>El numero mayor es el " + numero7);
else if (numero8 > numero9)
  document.write("<br>El numero mayor es el " + numero8);
else document.write("<br>El numero mayor es el " + numero9);
