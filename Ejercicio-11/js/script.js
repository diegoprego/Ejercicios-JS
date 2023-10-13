// 11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.

var num1 = Number(prompt("Ingrese un número"))
var num2 = Number(prompt("Ingrese otro número"))
var num3 = Number(prompt("Ingrese otro número"))
var num4 = Number(prompt("Ingrese otro número"))

var sumaDeNumeros = num1+num2+num3+num4
var promedioNumeros = (num1+num2+num3+num4)/4

alert("La suma de los números ingresdos es "+ sumaDeNumeros + " y el promedio es " + promedioNumeros) 