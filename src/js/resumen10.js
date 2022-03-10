

   function calcular(){
         let valor1, res;
         let txt = '';

          valor1 = parseInt(document.calculadora.valor1.value);

          res = (valor1 - 32) / 1.8 +'°C';

          document.calculadora.resultado.value = res;
          }