
 class EntradaDatos{
     constructor(){
         let nombre;
         let password;
         this.nombre = 'admin';
         this.contrasena = '1234';
     }

     introduceNombre(){

         let valorEntrada = document.formEntrada.txtInicial.value;
        
        if(this.compruebaNombre(valorEntrada))
            this.nombre = valorEntrada;
         else
             this.nombre = 'No valido';
     }

     compruebaNombre(valor){
         
         let flag = true;

         if (valor == null || valor == '') 
            flag = false;

         return flag;
     }

     verNombre(){
         return this.nombre;
     }

 }

 
 function programa(){
     let obj = new EntradaDatos();
     obj.introduceNombre();
     document.writeln(`El nombre es ${obj.verNombre()}<br>`)
 }
