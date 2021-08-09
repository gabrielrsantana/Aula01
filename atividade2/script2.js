// Faça um script  que com contenha os seguintes cálculos e exiba na tela:
// 1. Exiba na tela a soma da sua idade some com a do seu filho(a); //quem não tem soma com 0.
// 2. O resultado a soma do item anterior, multiplique com a idade do seu pai;
// 3. Agora some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01;
// 4. Agora, divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30;
//gabriel rocha santana

// E por fim, exiba na tela os resultados com um texto concatenado.


minha_idade=41;
idade_filho=0;
idade_pai=70;
irmao1=37;
irma1=27;
irma2=18;
total=0;
renda_familiar=1000;
resultado_final=0;
soma_irmaos_por_minha_idade=0;
minha_id_comfilho=0;
//somando idade dos irmaos
total_irmaos =irmao1 + irma1 +irma2;
total = total+(minha_idade + idade_filho); //dividindo com resultado item 1

 
minha_id_comfilho= minha_idade + 0;
resultado_final=  ((renda_familiar / 4) * 30);
 document.write("minha idade" +minha_idade);
 document.write("<br>");
 document.write("minha idade + idade meu filho= "+ minha_idade+ idade_filho);
 document.write("<br>");
 document.write("irdade irmao 1: "+irmao1);
 document.write("<br>");
 document.write("idade irma 1= "+irma1);
 document.write("<br>");
 document.write("idade irma 2= "+irma2);
 document.write("<br>");
 document.write("renda familiar= " +renda_familiar);
 document.write("<br>");
 
 document.write("(minha idade + meu filho) x id pai"+(minha_idade+ idade_filho*idade_pai));
 document.write("<br>");
// 3. Agora some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01;
soma_irmaos_por_minha_idade = (irmao1 + irma1 +irma2)*minha_idade;
soma_irmaos_por_minha_idade= (soma_irmaos_por_minha_idade /minha_id_comfilho);
document.write(" soma id irmaos x minha id e dividie por Minha id + id meu filho= " + soma_irmaos_por_minha_idade);
document.write("<br>");
// 4. Agora, divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30;
document.write("Renda familiar / 4 pessoas e multiplique 30= "+ resultado_final);
document.write("<br>");