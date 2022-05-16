//  ***************************
//   Ejemplos con los simbolos
//  ***************************

// console.log (3 < 5);

// console.log (3 > 5 );

//console.log (3 <= 5);

//console.log (3 >= 5);


//  ***************************
//        = / == / ===
//  ***************************

// un = es para asignacion
// const name = 'jonh'

//dos == es para comparar el valor
// console.log (2 == '2'); // true

// tres === compara valor y tipo de datos
// console.log (2 === '2'); //false

//  ***************************
//     DIFERENTES != / !==
//  ***************************

// un ! y un = comparamos que sean diferentes
//console.log (2 !='2'); //false

// un ! y dos == comparamos que sean exactamente diferentes
//console.log (2 !== '2'); //true

//  ************************************
//     EJERCICIO esMayorDeEdad(edad)
//  ************************************

// Crear una función esMayorDeEdad que tome como 
// argumento un número edad y devuelva true si es 
// mayor de edad (18 o más) o false de lo contrario

// esMayorDeEdad(15) // false
// esMayorDeEdad(18) // true
// esMayorDeEdad(27) // true

//  ***************************
//        EJEMPLO 1
//  ***************************
// const esMayorDeEdad = (edad) =>{
//     return edad >= 18;
// }
// console.log (esMayorDeEdad(15))

//  ***************************
//    EJEMPLO 2 - CON PROMPT
//  ***************************

// const edad = Number (prompt('Cual es tu edad?'));
// const esMayorDeEdad = (edad) =>{
//   return edad >= 18;
//  }
// console.log (esMayorDeEdad(edad))

//  *******************************************************
//     EJERCICIO calcularPuntaje(facil, normal, dificil)
//  *******************************************************

// Crear una función calcularPuntaje que calcule el puntaje de 
//un examen que consiste en ejercicios de distinto nivel. 
//Debe tomar como argumento tres que consisten en la cantidad 
//de ejercicios resueltos en cada nivel y devolver un número con 
//el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

// 1- crear funcion
// 2- funcio tome los tres valores facil, normal y dificil; 
// 3- devolver el puntaje toral

// const calcularPuntaje = (facil, normal, dificil) =>{
//     const resultadoFacil = facil * 3;
//     const resultadoNormal = normal * 5;
//     const resultadoDificil = dificil * 10;
//     const resultadoTotal = resultadoFacil + resultadoNormal + resultadoDificil;
//     console.log(resultadoTotal)
// }

// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

//  ***********************************
//     EJERCICIO esPar(numero)
//  ***********************************

//Crear una función esPar que tome como argumento un 
//número y devuelva true si dicho números es par o 
//false si no lo es

//TIP: un número es par si divido por 2 el resto 
//(o módulo) de esa operación es 0

// esPar(2) // true
// esPar(3) // false

// const esPar = (number) => {
//     return number % 2 === 0;
// }

// console.log (esPar(2));
// console.log (esPar(3));


// ***************************    
//     RETORNO IMPLICITO
// ***************************

// const esPar = (number) => number % 2 === 0;

// console.log (esPar(2));
// console.log (esPar(3));

//  ***********************************
//     EJERCICIO esImpar(numero)
//  ***********************************

//Crear una función esImpar que tome como argumento 
//un número y devuelva true si dicho números es impar 
//o false si no lo es

//TIP: un número es impar si divido por 2 el resto 
//(o módulo) de esa operación no es 0

//esImpar(2) // false
//esImpar(3) // true

// const esImpar = (number) => {
//      return number % 2 !== 0;
//  }

// console.log (esImpar(2));
// console.log (esImpar(3));


// ***************************    
//     RETORNO IMPLICITO
// ***************************

// const esImpar = (number) => number % 2 !== 0;

// console.log (esImpar(2));
// console.log (esImpar(3));

// *********************************    
//     FUNCIONES NATIVAS O METODOS
// *********************************
//    STRING
//*****************
// .length cuanta caracteres y espacios vacios 
// es para saber la longitus de un string
// const palabra = 'Perritos y gatos'
// console.log(palabra.length)
// *********************************

// .toUpperCase() pasa el texto a MAYUSCULAS
// const palabra = 'Perritos y gatos'
// console.log(palabra.toUpperCase());
// *********************************

//  .toLowerCase() pasa el texto a minusculas
// const palabra = 'Perritos y gatos'
// console.log(palabra.toLowerCase());
// *********************************

//  .slice(x, x) recorta el texto desde el primer incice 
//hasta el segundo indice
// const palabra = 'Perritos y gatos'
// console.log(palabra.slice(1, 5));
// *********************************

// .includes ('') busca un caracter o una palabra en el texto o cadena
// const palabra = 'Perritos y gatos en el parque andan sueltos'
// console.log(palabra.includes('parque'));
// *********************************

// .indexOf() busca en el texto la primera posicion 
//logica de un caracter en una cadena
// const palabra = 'Perritos y gatos'
// console.log(palabra.indexOf('p'));
// *********************************

// .lastIndexOf ( )busca en el texto la ultima posicion 
//logica de un caracter en una cadena
// const palabra = 'Perritos y gatos'
// console.log(palabra.lastIndexOf('p'));
// *********************************

// .replace cambia una palabra por otra, 
// necesita dos paramertos que palabra busca y por cual la cambia
// si no se pone nada deja vacio el espacio
// const palabra = 'Perritos y gatos juegan en el parque'
// console.log(palabra.replace('gatos', 'conejos'));
// console.log(palabra.replace('gatos', ''));
// *********************************

// .toString para cualquier metodo a String
// const palabra = 'Perritos y gatos juegan en el parque'
// const numeros = 12345
// console.log(typeof numeros.toString());

// ********************************
//     METODOS DE NUMEROS
//*********************************

// Math.min() nos retorna el numero menor de los que pasamos
//console.log(Math.min(23, 6, 8, 15, 9));
// *********************************

// Math.max() nos retorna el numero mayor de los que pasamos
//console.log(Math.max(23, 6, 8, 15, 9));
// *********************************

//Math.round() nos retorna el numero entero redondeado mas cercano al que le pasamos
//console.log(Math.round(2.8));//3
//console.log(Math.round(2.1));//2
// *********************************

//Math.ceil() nos retorna el numero entero redondeado mas cercano mayo al que le pasamos
//console.log(Math.ceil(2.1));//3
// *********************************

//Math.floor() nos retorna el numero entero redondeado mas cercano menor al que le pasamos
//console.log(Math.floor(2.9)); //2
// *********************************

//Math.randoml() nos retorna un munero aleatorio. 
//console.log(Math.random()* 10); // 0 al 10 tiene decimales
// *********************************

//da un numero aliatorio redondeado al numero mayor mas cercano
//console.log(Math.ceil (Math.random()* 10)); //0 al 10 sin decimales
// *********************************


// *********************************    
//     EJERCICIO EN CLASE 
// *********************************

//const numeroAleatorio = () => {
//    document.write(`El numero ganador de la loteria es: ${Math.ceil(Math.random() * 1000)}`);
    // alert ('se le dio click al boton') // para probar
//}


// ************************************************************    
//     EJERCICIO EN CLASE obtenerDuracionEnSegundos(duracion)
// ************************************************************

//Crear una función obtenerDuracionEnSegundos que tome como 
//argumento un string duracion con el formato (mm:ss) y la 
//cantidad de segundos totales de la duración

// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642

