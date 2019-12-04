
let boton = document.getElementById('boton');
let menu = document.getElementById('enlaces');
let abrir = true;

function apertura(){
  if(abrir){
    menu.style.width = '100vw';
    abrir = false;
  }else{
      menu.style.width = '0%';
      abrir = true;

  }
    
}
boton.addEventListener('click', apertura);