//Codigo del Cuadrado
console.group("Cuadrados");

function preimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

// Altura triangulo 

// function altura(lado1, lado2, base){
//     if(lado1 === lado2 && lado1 != base){
//         alert('isoceles')
//         const altura = Math.sqrt(lado1**2 - base**2/ 4)
//         console.log(altura)
//     }
//     else{
//         alert('no lo se')
//     }
// }

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Diametro

function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();


// Aca empezamos a interactuar con el HTML

// --------- CUADRADO --------

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = preimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = preimetroCuadrado(value);
    alert(area);
}

// --------- TRIANGULO ---------

function calcularPerimetroTriangulo() {
    const inputA = document.getElementById("InputTrianguloA");
    const valueA = Number(inputA.value);
    const inputB = document.getElementById("InputTrianguloB");
    const valueB = Number(inputB.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

// --------- CIRCULO ----------

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = Number(inputRadio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = Number(inputRadio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}