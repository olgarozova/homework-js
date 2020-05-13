'use strict'
function formAction(){        
    
    let modal = document.querySelector('#modal');
    let overlay = document.querySelector('#overlay');

    modal.classList.toggle('show');
    overlay.classList.toggle('show');
}

function init() {

    let buttonSubscribe = document.querySelector('#button-subscribe');
    buttonSubscribe.onclick = formAction;
    let buttonSend = document.querySelector('#button-send');
    buttonSend.onclick = formAction;
    let buttonClose = document.querySelector('#button-close');
    buttonClose.onclick = formAction;
        
}
init();




