class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.events();
    }

    events() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // para que o formulario nao seja enviado
        const checkValidFields = this.checkValidFields();
        console.log('Formulário não enviado!');
    }

    checkValidFields()  {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.formulario.querySelectorAll('.evaluate')){
            if(!field.value) {
                const label = field.previousElementSibling.innerHTML;
                this.createError(field, `Campo "${label}" não pode estar em branco!`);
                valid = false;
            }

            if(field.classList.contains('cpf')) {
                if(!this.validaCPF(field)) valida = false;
            }    

            if(field.classList.contains('usuario')) {
                if(!this.validaUsuario(field)) valida = false;
                console.log('chegue no valida usuario');
            }    
        }
    }

    validaUsuario(field) {
        const usuario = field.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(field, 'Precisa ter entre 3 e 12 caracteres!');
            valid =  false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)) { // expressão regular
            this.createError(field, 'Precisa conter apenas letras e/ou números!');
            valid =  false;
        }

        return true;
    }

    validaCPF(field) {
        const cpf = new ValidaCPF(field.value);

        if (!cpf.valida()) {
            this.createError(field, 'CPF inválido');
            return false;
        }

        return true;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
        
    }
}

const valida = new ValidaFormulario();