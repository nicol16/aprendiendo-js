//Resumen 9

function calcular(){
         let valor1, res;
         let txt = '';

         valor1 = parseInt(document.calculadora.valor1.value);

         res = (1.8 * valor1) + 32 +'°F';

        document.calculadora.resultado.value = res;

        if(res < 14){
          
                    document.write(res, ' , La temperaturs es desconocida');
                 
                }
                else{
                    if(res <= 32){
                      
                        document.write(res, ' , La temperatura es baja');
                    }
                    else{
                        if(res <= 68){
                     
                            document.write(res, ' , La temperatura es adecuada');
                        }
                        else{
                            if(res <= 96){
                            
                                document.write(res,' , La temperatura es alta');
                            }
                            else{
                               
                                document.write(res,' , La temperatura es desconocida');
                            }
                        }
                    }
                }
                        
             }