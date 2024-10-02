/**
 * Funcion para crear una simulacionde login
 */

let loginga = () => {
   let usDato = document.querySelector('#campoUser input');
   let pssWrd = document.querySelector('#campoPass input');

   if(usDato.value == 'Augusto' && pssWrd.value =='12345'){
      window.location = "./panel.html";
      //alert("los datos son correctos");
   }else{ 
      alert("El usuario y contraseña no son correctos");
      usDato.value = "";
      pssWrd.value = "";
   }
}
/**
 * Funcion para crear una simulacionde login -- FIN
 */