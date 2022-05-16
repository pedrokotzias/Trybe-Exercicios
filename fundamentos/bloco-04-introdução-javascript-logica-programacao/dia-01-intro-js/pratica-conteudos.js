// Variaveis
// 1
const myName = "Pedro";
const birthCity = "Floripa";
let birthYear = 1994;
birthYear = 2030;
// 2
const base = 5;
let height = 8;
const area = base*height;
const perimeter = base*4;
// 3
const nota = 80;
// 4
const currentHour = 23;
let message = "";
// 5
let weekDay = "segunda-feira";
// 6
let seletivo = "aprovada";

//Console.log e logica
// 1
console.log(myName);
console.log(birthCity);
console.log(birthYear);
// 2
console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);
// 3
if (nota>=80){
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota<80 && nota>=60){
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}
// 4
if (currentHour>= 22 && currentHour<=24){
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if(currentHour>=18 && currentHour<22){
    message = "Rango da noite, vamos jantar :D";
}
else if(currentHour>=14 && currentHour<18){
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if(currentHour>=11 && currentHour<14){
    message = "Hora do almoço!!!";
}
else if(currentHour>=4 && currentHour<11){
    message = "Hmmm, cheiro de café recém passado";
}
else {
    message = "Dormindo...zzZzZZzz..."
}
console.log(message);
// 5
if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}
// 6
switch (seletivo) {
    case "aprovada":
        console.log("parabéns!");
        break;

    case "lista":
        console.log("tenha esperanças!");
        break;
        
    case "reprovada":
        console.log("tente novamente!");
        break;
    
    default:
        console.log("nao se aplica.");
}