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
numero1 = parseInt(prompt("Dame un numero"));
numero2 = parseInt(prompt("Dame otro numero"));
document.write("<br>El total es de: " + (numero1 + numero2));
// Ejercicio 6
numero1 = parseInt(prompt("Dame un numero"));
numero2 = parseInt(prompt("Dame otro"));
if (numero1 > numero2) document.write("<br>El numero mayor es el " + numero1);
else document.write("<br>El numero mayor es el " + numero2);
// Ejercicio 7
numero1 = parseInt(prompt("Dame un numero"));
numero2 = parseInt(prompt("Dame otro"));
let numero3 = parseInt(prompt("Dame uno mas"));
if (numero1 > numero2 && numero1 > numero3)
  document.write("<br>El numero mayor es el " + numero1);
else if (numero2 > numero3)
  document.write("<br>El numero mayor es el " + numero2);
else document.write("<br>El numero mayor es el " + numero3);
// Ejercicio 8
numero1 = parseInt(prompt("Dame un numero"));
if (numero1 % 2 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2");
else document.write("<br>El numero " + numero1 + " no es divisible por 2");
// Ejercicio 9

// Ejercicio 10
numero1 = parseInt(prompt("Dame un numero"));
if (numero1 % 2 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2");
else if (numero1 % 3 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 3");
else if (numero1 % 5 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 5");
else if (numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 7");
else
  document.write(
    "<br>El numero " + numero1 + " no es divisible por 2, 3, 5 o 7"
  );
// Ejercicio 11
numero1 = parseInt(prompt("Dame un numero"));
if (
  numero1 % 2 === 0 &&
  numero1 % 3 === 0 &&
  numero1 % 5 === 0 &&
  numero1 % 7 === 0
)
  document.write("<br>El numero " + numero1 + " es divisible por 2, 3, 5 y 7");
else if (numero1 % 2 === 0 && numero1 % 3 === 0 && numero1 % 5 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2, 3 y 5");
else if (numero1 % 2 === 0 && numero1 % 3 === 0 && numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2, 3 y 7");
else if (numero1 % 2 === 0 && numero1 % 5 === 0 && numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2, 5 y 7");
else if (numero1 % 3 === 0 && numero1 % 5 === 0 && numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 3, 5 y 7");
else if (numero1 % 2 === 0 && numero1 % 3 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2 y 3");
else if (numero1 % 2 === 0 && numero1 % 5 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2 y 5");
else if (numero1 % 2 === 0 && numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2 y 7");
else if (numero1 % 3 === 0 && numero1 % 5 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 3 y 5");
else if (numero1 % 3 === 0 && numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 3 y 7");
else if (numero1 % 5 === 0 && numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 5 y 7");
else if (numero1 % 2 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 2");
else if (numero1 % 3 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 3");
else if (numero1 % 5 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 5");
else if (numero1 % 7 === 0)
  document.write("<br>El numero " + numero1 + " es divisible por 7");
else
  document.write(
    "<br>El numero " + numero1 + " no es divisible por 2, 3, 5 o 7"
  );