//variables para el masonry voy a crear todo el menu responsive abajo de todo este codigo 
let nav = document.getElementById('nav');
/*400x para intercambiar las clases*/

function menus(){
    
    if(window.pageYOffset <= 400){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
    }
}
window.addEventListener('scroll', function(){
    menus();
    
});


