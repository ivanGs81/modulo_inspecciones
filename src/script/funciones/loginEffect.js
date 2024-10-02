/**
 * efecto de los campos del login
 */
let loginEffect = (idCamp) => {
   let base = document.getElementById(idCamp);

   let cInput = base.querySelector('input');
   let cLabel = base.querySelector('label');
   
   cInput.addEventListener('focusin', (e) =>{
      cLabel.classList.add('lab-active');
   });

   cInput.addEventListener('focusout', (e) =>{
      if(cInput.value == ""){
         cLabel.classList.remove('lab-active');
      }
   });
}
/**
 * efecto de los campos del login -- END --
 */