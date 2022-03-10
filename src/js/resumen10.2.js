

 function EntraData(){
     let txt = document.getElementById('tempEntrada').value;
     let temp = parseInt(txt);
     console.log(txt);
     return temp;
 }


 function EscriuData(nomZona, text){
     document.getElementById(nomZona).innerHTML = text;
 }


 function toFahrenheit(){
     let temp = EntraData();
     temp = ((1.8)* temp + 32);
     EscriuData('Zona1', temp + '°F');
     FraseRelativa(temp);
 }

 function toCelsius(){
     let temp = EntraData();
     let temp2 = ((temp - 32)/ 1.8);
     EscriuData('Zona1', temp2 + '°C');
     FraseRelativa(temp);
 }

 function FraseRelativa(temperatura){
     let cadena = '-';
     if ((temperatura >= 14) && (temperatura < 32 )) cadena = 'Temperatura Baja';
     if ((temperatura >= 32) && (temperatura < 68 )) cadena = 'Temperatura Adecuada';
     if ((temperatura >= 68) && (temperatura <= 96 )) cadena = 'Temperatura Alta';
     if (cadena =='-') cadena = 'Temperatura Desconocida';
     EscriuData('Zona2', cadena);
 }