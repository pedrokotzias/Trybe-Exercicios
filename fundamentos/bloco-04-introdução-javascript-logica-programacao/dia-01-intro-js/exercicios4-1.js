// Variaveis

const a = 10;
const b = 5;

let aritmético = "";

// Programa de operação aritmético

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