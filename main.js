
function init() {
    
    var checkboxes = document.querySelectorAll(".checkboxElement");
    var textElement = document.querySelector("#textElement");
        
    for(var checkbox of checkboxes){        
        checkbox.onclick = changeInputAttribute;
    }


    function setDefault(checkedElement){

        textElement.disabled = false;
        textElement.readOnly = false;
        textElement.type = 'text';

        for(var checkbox of checkboxes){                     
            checkbox.checked = checkbox.value === checkedElement.value ? true : false;            
        }        
    }


    function changeInputAttribute(){
         
        setDefault(this);
        
        switch(this.value){
            case 'disable' :             
                textElement.disabled = true;
                break;
            case 'read' :             
                textElement.readOnly = true;
                break;
            case 'number' :             
                textElement.type = 'number';
                break;
            case 'hidden' :             
                textElement.type = 'password';
                break;                            
        }          
    }   
   
}
init();




