


 let num1, num2, num3;
 let numA = prompt('Introduce el primer numero:','');
 let numB = prompt('Introduce el segundo numero:','');
 let numC = prompt('Introduce el tercer numero:','');


 num1 = parseInt(numA); 
 num2 = parseInt(numB);
  num3 = parseInt(numC);


 if(num1 > num2 && num1 > num3){
     document.write(`El mayor es el ${num1}`);
 }
 else{
     if(num2 > num3){
         document.write(`El mayor es el ${num2}`);
     }
     else{
         document.write(`El mayor es el ${num3}`);
     }
 }