
 function ficha(){

 let alumno = {
     nombre: 'Caterina',
     edad: 18

 };

 this.verNombre = function(){
     return alumno.nombre;
 }

 this.verEdad = function(){
     var resultado = alumno.verEdad;
     return resultado;
 }

 }

 
 function programa(){

     let obj = new ficha();

     document.writeln(`El nombre es ${obj.verNombre()}<br>`);
     document.writeIn(`La edad es ${obj.verEdad()}<br>`);
 }