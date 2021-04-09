//705.484.450-52 e 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
        isSequencia() {
            return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
        }

        geraNovoCpf()   {
            const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
            const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // usando metodo estatico utilizando a classe
            const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
            this.novoCPF = cpfSemDigitos + digito1 + digito2;
        }

        // Quando não utilizo a palavra THIS em um método,
        // isso significa que ele pode se tornar estatico
        static geraDigito(cpfSemDigitos)   {
            let total = 0;
            let reverso = cpfSemDigitos.length + 1;

            for(let stringNumerica of cpfSemDigitos) {
                console.log(stringNumerica, reverso);
                total += reverso * Number(stringNumerica);
                reverso--;
            }
            
            const digito = 11 - (total % 11);
            return digito <= 9 ? String(digito) : '0';
            console.log();
        }
        
        valida() {
            if(!this.cpfLimpo) return false;
            if(typeof this.cpfLimpo !== 'string') return false;
            if(this.cpfLimpo.length !== 11) return false;
            if(this.isSequencia()) return false;
            if(!this.geraNovoCpf());
            console.log(this.novoCPF);

            return this.novoCPF === this.cpfLimpo;
        }
    }


let validacpf = new ValidaCPF('');
//validacpf = new ValidaCPF('999.999.999-99')
validacpf = new ValidaCPF('368.517.008-24')
console.log(validacpf.valida());

if (validacpf.valida()) {
    console.log('CPF valido');
} else {
    console.log('CPF Inválido');
}