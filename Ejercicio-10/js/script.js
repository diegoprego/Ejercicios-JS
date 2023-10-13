// 8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.

const PI = 3.1416
const diametro = prompt("Ingrese el diámetro de un círculo en cm")
var circunferencia = diametro*PI
var area = PI*((diametro/2)**2)

alert("La circunferencia de un círculo con un diámetro de " + diametro + " centímetros es " + circunferencia + " y su área es " + area + " cm2") 