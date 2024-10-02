/**
 * 
 * animacion de conteo de la cantidad de puertos
 */

let animaConteo = (miId) => {
   let objeto = document.getElementById(miId);
   let objCont = objeto.innerHTML;
   anime({
      targets: objeto,
      innerHTML: [0, objCont],
      round: 1,
      duration: 1500,
      easing: 'easeOutQuad'
   });
}
/**
 * 
 * animacion de conteo de la cantidad de puertos - END
 */