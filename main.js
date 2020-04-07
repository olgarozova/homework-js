var num1 = prompt('Enter a first number:');

if(num1 === ''){
    alert('The field is empty');
}else{
    if(isFinite(num1)){
        var num2 = prompt('Enter a second number:');        

        if(num2  === ''){
            alert('The field is empty');
        }else{
            if(isFinite(num2)){
                var op = prompt('Enter an operator (+ - * /):');
                console.log(op);

                if(op === '+'){                    
                    alert('Your result is: '+ (+num1 + +num2));               
                }else if(op === '-'){
                    alert('Your result is: '+ (+num1 - +num2));               
                }else if(op === '*'){
                    alert('Your result is: '+ (+num1 * +num2));     
                }else if(op === '/'){        
                    var res = +num1 / +num2;                            

                    if(isNaN(res)){
                        alert('Your result is not a number');
                    }else if(res === Infinity || res === -Infinity){
                        alert('Your result is an infinity');                         
                    }else{
                        alert('Your result is: '+ res);                         
                    }
                }else{
                    alert('An invalid operator'); 
                }
                
            }else{        
                alert('You should enter a number');
            }            
        }
                    
    }else{    
        alert('You should enter a number');
    }
}