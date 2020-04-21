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

function transformTextWithTag(str,tagInteger,tagIntegerStyle,tagStr){
    var result = '';   
    var numbFlag = false;

    for(var i in str) {         
        if(isNumber(str[i])){                                                
            result += numbFlag ? str[i] : `<${tagInteger} ${tagIntegerStyle}>${str[i]}`;
            numbFlag = true;
        }else{
            if(numbFlag) { result += `</${tagInteger}>`; }
            numbFlag = false;
            if(isLetter(str[i]) && str[i] === str[i].toUpperCase()) { result += `<${tagStr}>`; }                         

            result += str[i];

            if(str[i] === '.')  { result += `</${tagStr}>`; }              
        }
        
    }   
    return result;
}

function insertHtml(){ 
    var str = document.getElementById("form_transform__text").value;      
    var html = transformTextWithTag(str,"b",'style = color:red',"p");  
    document.getElementById('contentResult__text').innerHTML = html;    
}
