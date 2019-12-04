let imagenes = document.querySelectorAll('.gal');
let modal = document.getElementById('modal');
let img = document.querySelector('.modal-img');
let cerrar = document.getElementById('boton2');

for(let i = 0; i < imagenes.length;i++){
    imagenes[i].addEventListener('click', function(e){
        modal.classList.toggle('modal-open');
        let src = e.target.src;
        img.setAttribute("src",src);
    });
}

cerrar.addEventListener('click',function(){
    modal.classList.toggle('modal-open'); 
});