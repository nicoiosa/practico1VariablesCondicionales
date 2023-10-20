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
document.write("<br>El total es de: " + (numero3 + numero4));
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
// Ejercicio 8
let numero10 = parseInt(prompt("Dame un numero"))
if (numero10%2===0)
document.write("<br>El numero " + numero10 + " es divisible por 2")
else document.write("<br>El numero " + numero10 + " no es divisible por 2")
// Ejercicio 9
let frase = prompt("Escribe una frase")
let a = "a"
let e = "e"
let i = "i"
let o = "o"
let u = "u"
document.write()
// Ejercicio 10
let numero11 = parseInt(prompt("Dame un numero"))
if (numero11%2===0)
document.write("<br>El numero " + numero11 + " es divisible por 2")
else if (numero11%3===0)
document.write("<br>El numero " + numero11 + " es divisible por 3")
else if (numero11%5===0)
document.write("<br>El numero " + numero11 + " es divisible por 5")
else if (numero11%7===0)
document.write("<br>El numero " + numero11 + " es divisible por 7")
else document.write("<br>El numero " + numero11 + " no es divisible por 2, 3, 5 o 7")
// Ejercicio 11
let numero12 = parseInt(prompt("Dame un numero"))
if (numero12%2===0 && numero12%3===0 && numero12%5===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 2, 3, 5 y 7")
else if (numero12%2===0 && numero12%3===0 && numero12%5===0)
document.write("<br>El numero " + numero12 + " es divisible por 2, 3 y 5")
else if (numero12%2===0 && numero12%3===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 2, 3 y 7")
else if (numero12%2===0 && numero12%5===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 2, 5 y 7")
else if (numero12%3===0 && numero12%5===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 3, 5 y 7")
else if (numero12%2===0 && numero12%3===0)
document.write("<br>El numero " + numero12 + " es divisible por 2 y 3")
else if (numero12%2===0 && numero12%5===0)
document.write("<br>El numero " + numero12 + " es divisible por 2 y 5")
else if (numero12%2===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 2 y 7")
else if (numero12%3===0 && numero12%5===0)
document.write("<br>El numero " + numero12 + " es divisible por 3 y 5")
else if (numero12%3===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 3 y 7")
else if (numero12%5===0 && numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 5 y 7")
else if (numero12%2===0)
document.write("<br>El numero " + numero12 + " es divisible por 2")
else if (numero12%3===0)
document.write("<br>El numero " + numero12 + " es divisible por 3")
else if (numero12%5===0)
document.write("<br>El numero " + numero12 + " es divisible por 5")
else if (numero12%7===0)
document.write("<br>El numero " + numero12 + " es divisible por 7")
else document.write("<br>El numero " + numero12 + " no es divisible por 2, 3, 5 o 7")