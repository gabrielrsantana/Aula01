// Uma escola está precisando criar um sistema que exiba na tela a situação dos alunos com relação a aprovação. Crie um script com os seguintes critérios: 

// gabriel rocha santana
// Dica: utilize o operador ternário.

// 1- os alunos tem 03 notas;
// 2 - Você deverá fazer a média entre as três notas;
// 3 - Se a media for maior ou igual a 7 exiba na tela "Aprovado";
// 4- Se a media for menor que 7 exiba na tela "Reprovado";
// 5 - Atribua nome aos alunos e inclua junto a exibição da classificação.


// Obs.: Faça este processo para 03 alunos e enquadre cada um nas situações acima..

//criando  o aluno1
aluno1_nota1=7;
aluno1_nota2=7;
aluno1_nota3=7;

//criando aluno2
aluno2_nota1=6;
aluno2_nota2=7;
aluno2_nota3=7;

//criando aluno3
aluno3_nota1=9;
aluno3_nota2=7;
aluno3_nota3=7;

//atribuindo nomes aos alunos
aluno1="gabriel";
aluno2="joao";
aluno3="jessica";


media1= 0; //average grade student 1, etc
media2=0;
media3=0;




media1 = (aluno1_nota1 + aluno1_nota2 +aluno1_nota3 )/3;
media2 = (aluno2_nota1 + aluno2_nota2 +aluno2_nota3 )/3;
media3 = (aluno3_nota1 + aluno3_nota2 +aluno3_nota3 )/3;
document.write("<br>");
document.write(aluno1+" = " +( media1 >=7 ? "Aprovado":"Reprovado"));
document.write("<br>");
document.write(aluno2+"  = " + (media2 >=7 ? "Aprovado":"Reprovado"));
document.write("<br>");
document.write(aluno3 +" =  " +(media3 >=7 ? "Aprovado":"Reprovado"));
document.write("<br>");
