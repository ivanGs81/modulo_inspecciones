/**
 * menu principal
 */
let effectMenu = (abreMenu, cierraMenu, miMenu, miCont) => {
   let abrir = document.getElementById(abreMenu);
   let cerrar = document.getElementById(cierraMenu);

   let menu = document.getElementById(miMenu);
   let contenido = document.querySelectorAll(miCont);

   abrir.addEventListener('click', (e) => {
      menu.classList.add('active');
      for(let i=0; i < contenido.length; i++){
         contenido[i].classList.add('blur');
      }
   });
   cerrar.addEventListener('click', (e) => {
      menu.classList.remove('active');
      for (let i = 0; i < contenido.length; i++) {
         contenido[i].classList.remove('blur');
      }
   });

}
/**
 * menu principal -- end
 */