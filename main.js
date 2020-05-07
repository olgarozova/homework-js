
function init() {

    let checkboxes = document.querySelectorAll('.checkbox');
    for(let checkbox of checkboxes){
        checkbox.onclick = setActive;        
    }
    function setActive(){        
        this.classList.toggle('active');        
    }

}
init();




