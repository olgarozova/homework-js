function FormData(name, age, email, subscribe, bank) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.subscribe = subscribe;
    this.bank = bank;

    this.send = function () {
        var message = 'Data sent.'

        if (this.bank) {
            message += ' You have chosen a payment method' + this.bank + '.';
        }
        if (this.subscribe) {
            message += ' Thank you for subscribing to our newsletter';
        }        
        alert(message);
    }
}
function FormElement() {

    this.nameElement = document.querySelector("#user-name");
    this.ageElement = document.querySelector("#user-age");
    this.emailElement = document.querySelector("#user-email");
    this.subscribeElement = document.querySelector("#user-subscribe");
    this.bankElement = null;
   
    this.form = document.querySelector("form");
    


    this.validation = function () {

        let message = this.nextElementSibling;

        message.classList.remove('show');
        this.classList.remove('invalid');
        this.classList.remove('valid');

        if (!isValid(this.value, this.name)) {
            this.classList.add('invalid');
            message.classList.add('show');
        } else {
            this.classList.add('valid');
        }

        function isValid(str, type) {

            if (!str) {
                return false;
            }

            var emailPattern = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

            if (type === 'age' && (str.length > 2 || str < 7)) return false;
            if (type === 'email' && !emailPattern.test(str)) return false;

            for (let char of str) {
                let symbol = char.toLowerCase();

                let isLetter = symbol.charCodeAt() >= 97 && symbol.charCodeAt() <= 122;

                if (type === 'name' && !isLetter) return false;
            }
            return true;

        };

    };
    this.removeHighlight = function () {
        if(this.classList.contains('valid')){            
            this.classList.remove('valid');
        }
    };

    this.send = function (event) {       
        this.bankElement = document.querySelector("input[name='bank']:checked");

        let bank = this.bankElement ? this.bankElement.parentNode.innerText : '';

        let validate = this.validation.bind(this.nameElement);
        validate();
        this.nameElement.classList.remove('valid');
        validate = this.validation.bind(this.ageElement);
        validate();
        this.ageElement.classList.remove('valid');
        validate = this.validation.bind(this.emailElement);
        validate();
        this.emailElement.classList.remove('valid');

        if(!this.nameElement.classList.contains('invalid') && !this.ageElement.classList.contains('invalid')
            && !this.emailElement.classList.contains('invalid')){
            var data = new FormData(this.nameElement.value,
                this.ageElement.value,
                this.emailElement.value,
                this.subscribeElement.checked,
                bank);
            data.send();
        }else{
            alert('Please enter correct data.');
            event.preventDefault();
        }
        

    };

    this.init = function () {
        this.nameElement.oninput = this.validation;
        this.nameElement.onblur = this.removeHighlight;

        this.ageElement.oninput = this.validation;
        this.ageElement.onblur = this.removeHighlight;

        this.emailElement.oninput = this.validation;            
        this.emailElement.onblur = this.removeHighlight;

        this.form.onsubmit = this.send.bind(this);       
    };
    this.init();
}
new FormElement();



