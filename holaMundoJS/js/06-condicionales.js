'use strict'

//Condicional IF

var edad = 19;
var nombre = "Enrique Navarro";

/* if (edad1 > edad2) {
    console.log("Edad1 es mayor que edad2");
} else
    console.log("la Edad2 es mayor"); */

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavia eres milenial");
    } else if (edad >= 70) {
        console.log("Eres Anciano");
    } else {
        console.log("Ya no eres Milenial");
    }
} else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/*
OPERADORES LOGICOS
AND && 
OR 
Negacion !
*/

var year = 2018;

// Negacion
if (year != 2019) {
    console.log("El año no es 2016, realmente estamos en el año: " + year);
}

//AND
if (year >= 2000 && year <= 2020) {
    console.log("estamos en la era actual..");
} else {
    console.log("estamos en la era postModerna..");
}

//OR
if (year == 2008 || year == 2018) {
    console.log("El año acaba en 8");
}