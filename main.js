function isLetter(char) {
    char = char.toUpperCase();
    if (!(char >= "A" && char <= "Z")) {
        return false;
    }
    return true;
}

function isNumber(char) {
    return !isNaN(char) && char !== '' && char !== ' ';
}


function counterWords(string, checkWords) {

    var wordsList = checkWords.split(',');
    var words = {};
    for (var item of wordsList) {
        words[item.toLowerCase()] = '0';
    }    
    var textWord = '';
    for (var symb of string) {
        if (isLetter(symb) || isNumber(symb)) {
            textWord += symb.toLowerCase();
        } else {
            if (words[textWord]) {
                words[textWord]++;
            }

            textWord = '';
        }
    }    
    return words;
}

function outputResult(words) {
    var str = '';

    for (var word in words) {
        str += `<li>${word}: ${words[word]}</li>`;
    }
     console.log(str);
    return str;
}

function insertHtml() {
    var str = document.getElementById("form_transform__text").value;
    var words = document.getElementById("form_transform__words").value;
    var html = outputResult(counterWords(str, words));
    document.getElementById('contentResult_list').innerHTML = html;
}
