
'use strict'
function init() {

    var arrow = document.querySelector('#content__menu-arrow');
    var menuContainer = document.querySelector('#content__menu-wrapper');
    let menu = document.querySelector('#content__menu');    

    arrow.onclick = showMenu;

    function showMenu() {                        
        var isShow = this.parentNode.classList.toggle('show');
        if(isShow){
            menuContainer.style.paddingBottom = (menu.offsetHeight + arrow.offsetHeight) + 'px';    
            arrow.style.top = menu.offsetHeight + 'px';
        }else{
            menuContainer.style.paddingBottom = arrow.offsetHeight + 'px';    
            arrow.style.top = 0;
        }     
    }
}
init();




