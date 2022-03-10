

 let dato, altura;
 dato = prompt('Escribe tu altura en cm', '0');
 altura = parseInt(dato);

 if(altura > 180) resultado = 'Por encima de la media';
 else{
     if (altura >= 140)
     resultado = 'Altura Media';
     else
     resultado = 'Por debajo de la media';
 }

 document.write(resultado);
