// Variaveis

const a = 10;
const b = 5;
const c = 20;
const d = 20;
const e = 80;
const f = 80;
const g = 100;
const h = 250;
const i = 300;
const j = 90;
const k = 199;

let aritmético = "";
let xadrez = "";
let convers = 0;
let salario = 5002.52;

// 1- Programa de operação aritmético

aritmético = "adição";

switch (aritmético) {
  case "adição":
    console.log(a+b);
    break;

  case "subtração":
    console.log(a-b);
    break;
      
  case "multiplicação":
    console.log(a*b);
    break;

  case "divisão":
    console.log(a/b);
    break;

  case "módulo":
    console.log(a%b);
    break;
  
  default:
    console.log("operação nao existente");
}

// 2 - programa maior de dois numeros

if (a>b) {
  console.log("A > B");
}
else {
  console.log("B > A");
}

// 3 - programa maior de tres numeros

if (a>b && a>c) {
  console.log("A é o maior");
} else if(b>a && b>c){
  console.log("B é o maior");
}
else {
  console.log("C é o maior");
}

// 4 - programa positivo, negativo ou zero.

if (a>0){
  console.log("positive");
} else if(a<0){
  console.log("negative");
}
else {
  console.log("zero");
}

// 5 - programa angulo interno triangulo

let soma = d+e;
const triangulo = 180;

if (soma+f==triangulo){
  console.log(true);
}
else if (soma+f<0){
  console.log("invalid")
}
else {
  console.log(false);
}

// 6 - programa xadrez

xadrez = "KiNG";
xadrez = xadrez.toLowerCase();

switch (xadrez) {
  case "king":
    console.log("move in any direction one square.");
    break;

  case "queen":
    console.log("can move any amount of squares in any direction");
    break;
      
  case "bishop":
    console.log("move any amount of squares in the diagonals");
    break;

  case "rock":
    console.log("move any amount of squares horizontally or vertically");
    break;

  case "knight":
    console.log("moves in a 'L' shape");
    break;

  case "pawn":
    console.log("moves one or two squares foward");
    break;
  
  default:
    console.log("invalid chess piece");
}

// 7 - programa conversao de notas

convers = 0;

if (convers>=90 && convers<=100) {
  console.log("A");
} else if (convers>=80 && convers<90) {
  console.log("B");
} else if (convers>=70 && convers<80) {
  console.log("C");
} else if (convers>=60 && convers<70) {
  console.log("D");
} else if (convers>=50 && convers<60) {
  console.log("E");
} else if (convers<50 && convers>=0) {
  console.log("F");
} else {
  console.log("error, invalid number");
}

// 8 - programa tres numeros constantes, algum par = true.

if (g%2==0 || h%2==0 || i%2==0) {
  console.log(true);
} else {
  console.log(false);
}

// 9 - programa tres numeros constantes, algum impar = true.

if (g%2!==0 || h%2!==0 || i%2!==0) {
  console.log(true);
} else {
  console.log(false);
}

// 10 - programa lucro em mil produtos

const valorCustoTotal = 90 * (120/100);
const lucro = k - valorCustoTotal;
const lucroTotal = lucro * 1000;
console.log(lucroTotal);

// 11 - Cálculo INSS e IR

const aliquota8 = salario * (8/100);
const aliquota9 = salario * (9/100);
const aliquota11 = salario * (11/100);
const aliquotaMax = 570.88;

let salarioBase = 0;

let ir0 = salarioBase;
let ir75 = (salarioBase * (7.5/100)) - 142.8;
let ir15 = (salarioBase * (15/100)) - 354.8;
let ir225 = (salarioBase * (22.5/100)) - 636.13;
let ir275 = (salarioBase * (27.5/100)) - 869.36;

if (salario<=1556.94) {
  salarioBase = salario - aliquota8;
} else if (salario>= 1556.95 && salario<=2594.92) {
  salarioBase = salario - aliquota9;
} else if (salario>=2594.93 && salario<=5189.82) {
  salarioBase = salario - aliquota11;
} else {
  salarioBase = salario - aliquotaMax;
}

if (salarioBase<=1903.98) {
  Ir = 0;
} else if (salarioBase>= 1903.99 && salario<=2826.65) {
  Ir = (salarioBase * (7.5/100)) - 142.8;
} else if (salarioBase>=2826.66 && salario<=3751.05) {
  Ir = (salarioBase * (15/100)) - 354.8;
} else if(salarioBase>=3751.06 && salario<=4664.68) {
  Ir = (salarioBase * (22.5/100)) - 636.13;
} else {
  Ir = (salarioBase * (27.5/100)) - 869.36;
}

var salarioLiquido = salarioBase - Ir;
var salarioLiquido = parseFloat(salarioLiquido.toFixed(2));

console.log(salarioLiquido);
