//var minha_idade= 41;
// document.write("Minha idade é maior que 25? :<br>");
// document.write(minha_idade >= 25 ? "Sim é maior que 25":"nao é maior que 25");

// var numero_testado=10;
// numero_test = numero_testado % 2;
// document.write("O numero testado é: " + numero_testado+"<br>");
// document.write((numero_test != 0) ? "é impar" :"é par");




//IMC = peso /  altura ^2

var imc=0;

peso = 85;
altura =1.70; //metros


calculo_imc =(peso / (altura**2));

document.write("Peso é: " + peso+"<br>");
document.write("IMC = " + calculo_imc+"<br>");
document.write((calculo_imc >30) ? "é obseso" :"não é obeso");