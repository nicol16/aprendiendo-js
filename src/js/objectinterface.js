

 let ficha = (function () {
     
    let edad;
     let alumno;
     this.alumno = 'Marga';
     this.edad = 19;


     return{
         inicio(){
             this.alumno = 'Norat'
             this.edad = 17
         },
         verNombre(){
             return this.alumno
         },
         verEdad(){
             return this.edad
         }
     }

 })();

 function programa(){

     ficha.inicio();
     document.writeln(`El nombre es ${ficha.verNombre()}<br>`);

     document.writeln(`La edad es ${ficha.verEdad()}<br>`);
 }
