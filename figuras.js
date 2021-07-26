//Codigo del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrasdo miden: " +ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrasdo es: " +perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrasdo es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 + " cm," 
    + ladoTriangulo2 + " cm," 
    + baseTriangulo + " cm."
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo =(baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo

console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es de: " +radioCirculo + "cm");

// Diametro
const diametroCirsulo = radioCirculo * 2;
console.log("El diametro del circulo es de " + diametroCirsulo + "cm");

// PI
const PI = Math.PI;
console.log("El PI es de: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirsulo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();