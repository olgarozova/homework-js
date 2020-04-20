function myIndexOf(value,chars){
    for(var i in chars){
        if(chars[i] === value.toUpperCase()) return i ;
    }
    return -1;
}
var sixteen = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function getNumbReverse(numb,system){
    if(system === 16){
        return myIndexOf(numb,sixteen);
    }else{
        return numb;  
    }
}

function getNumb(numb,system){
    if(system === 16){
        return sixteen[numb];
    }else{
        return numb;  
    }
}

function recursiveDivision(numb,system,resArr){ 
    if(numb < system){            
        resArr.unshift(getNumb(numb,system));                 
        return;

    }else{            
        resArr.unshift(getNumb(numb % system,system));            
        numb = Math.floor(numb / system);
        recursiveDivision(numb,system,resArr);
    }
} 

function DecimalSystemToElse(numbStr,system){    
    var result = [];  

    recursiveDivision(+numbStr,+system,result);  

    return result.join('');
}

function ElseToDecDecimalSystem(numbStr,system){    
    var result = 0;
    var rank = 0;
    for(var i = numbStr.length-1 ; i >= 0 ;i--){        
        result += getNumbReverse(numbStr[i],+system) * Math.pow(+system,rank);
        rank++;
    }    
    return result;
}

function NotDecimalToNotDecimal(numbStr,fromSystem,toSystem){
    var result = '';   
    
    result = ElseToDecDecimalSystem(numbStr,fromSystem);
    
    result = DecimalSystemToElse(result,toSystem);    
    
    return result;
}


function getResult(inputData) {    
    var result = '';

    if(inputData){
        if(inputData.fromSystem === '10'){            
            result = DecimalSystemToElse(inputData.number,inputData.toSystem);
        }else if(inputData.toSystem === '10'){            
            result = ElseToDecDecimalSystem(inputData.number,inputData.fromSystem);
        }else{           
            result = NotDecimalToNotDecimal(inputData.number,inputData.fromSystem,inputData.toSystem);
        }        
    
    }else{
        result = 'Incorrect input data';
    }

    return result;
}

function parseInputData(str){   
    
    if(myIndexOf('/',str) === -1 || myIndexOf('>',str) === -1){       
        return 0;
    } 
    var numberStr = str.split('/',1);  
    
    var  systemsPattern = str.slice(numberStr[0].length+1,str.length);    
    
    var systems = systemsPattern.split('>');
    
    return {
        number : numberStr[0],
        fromSystem : systems[0],
        toSystem : systems[1], 
    };
}

function calculate(){
    
    var userStr = document.getElementById('form_transform__text').value;    

    var inputData = parseInputData(userStr);    
    var result = getResult(inputData);
    
    document.getElementById('contentResult__text').innerHTML = result;        

}
