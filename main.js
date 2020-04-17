function isNumber(char) {   
    return !isNaN(char) && char !=='' && char !==' ';
  }

function  isLetter(char) {     
    char = char.toUpperCase();
    if (!(char >= "A" && char <= "Z")){      
        return false;
    }
    return true;
 } 
 
 function isInclude(symbol,include){
    for(var char of include){        
        if(symbol === char) return true;                        
    }
    return false;
 }

 function clearStr(str,includeSymb){
    var result = '';
    for(var item of str){      
       if(isLetter(item) || isNumber(item) || isInclude(item,includeSymb)){        
          result += item;         
       }       
    }
    return result;
 } 

function insertHtml(){ 
    var str = document.getElementById("form_transform__text").value; 
    var includeSymb = [' ','.',','];     
    var html = clearStr(str,includeSymb);  
    document.getElementById('contentResult__text').innerHTML = html;    
}
