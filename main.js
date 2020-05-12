
'use strict'
function init() {

    let inputElement = document.querySelector('#user-input');
    let message = document.querySelector('#user-input-message');
    let selectElement = document.querySelector('#input-type');    

    inputElement.onfocus = validation;
    inputElement.oninput = validation;
    inputElement.onblur = stopValidation;
    selectElement.onchange = validation;
    

    function isValid(type,str){

        message.innerHTML = "";
        message.classList.remove('show');
        inputElement.classList.remove('input-error');

        if(str){
            inputElement.classList.add('input-ok');
        }

        for (let char of str) {                
            let symbol = char.toLowerCase();

            let isNumber = symbol.charCodeAt() >= 48 && symbol.charCodeAt() <= 57;        
            let isLetter = symbol.charCodeAt() >= 97 && symbol.charCodeAt() <= 122;
            let isComma = symbol === ',';  
            let isDot = symbol === '.';                

            if(type === 'lndc' && (!isLetter && !isNumber && !isComma && !isDot)) return false;                                
            if(type === 'letter' && !isLetter) return false;                                
            if(type === 'number' && !isNumber) return false;                                
  
        }
        return true;
    }  

    function validation(){ 
        
        message.innerHTML = "";
        message.classList.remove('show');
        inputElement.classList.remove('input-error');    

        if(selectElement.value === 'none' && inputElement.value !==''){
            message.classList.add('show');
            message.innerHTML = selectElement[selectElement.selectedIndex].label;
            return;
        }
        
        if(!isValid(selectElement.value,inputElement.value)){
            inputElement.classList.add('input-error');
            inputElement.classList.remove('input-ok');
            message.classList.add('show');
            message.innerHTML = "Allow " + selectElement[selectElement.selectedIndex].label.toLowerCase();       
        } 

    }

    function stopValidation(){
      
        if(inputElement.classList.contains('input-ok')){
            message.classList.remove('show');
            inputElement.classList.remove('input-ok');
        }
    }

}
init();




