function transformStrToHtmlList(str,symb1,symb2){
    var list = str.split(symb1,1);         

    var pattern = str.slice(list[0].length+1,str.length);    
    
    var patternTag = pattern.split(symb2); 
    
    list = list[0].split(',');
           
    var result = '';
    for (var item of list){        
        result += patternTag[0] + item + patternTag[1];                        
    }

    return result;
}

function insertHtml(){ 
    var str = document.getElementById("form_transform__text").value;      
    var html = transformStrToHtmlList(str,'/','$');  
    document.getElementById('list').innerHTML = html;    
}
