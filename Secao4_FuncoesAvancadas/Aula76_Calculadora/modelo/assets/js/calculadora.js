// factory function
// criar a calculadora como se fosse um objeto
// nao precisaria da factory function pois é apenas uma
// é feita assim apenas para treinar a factory function

function criaCalculadora()	{
    return	{
			display: document.querySelector('.display'), // atributo display (this.display)
			btnClear: document.querySelector('.btn-clear'),

			inicia()	{
				this.cliqueBotoes(); // usa this pois precisa referenciar uam chave do objeto dentro do objeto
				//alert('Calculadora iniciada');
				this.pressionaEnter();
				
			},

			pressionaEnter()	{
				this.display.addEventListener('keyup', e => {
					if(e.keyCode === 13)	{
						this.realizaConta();
					}
				});
			},

			clearDisplay()	{
				this.display.value = '';
			},

			apagaUm()	{
				this.display.value = this.display.value.slice(0, -1);
			},

			realizaConta()	{
				// MUITO CUIDADO AO USAR EVAL POIS PODE DEIXAR QUE O USUÁRIO INSIRA QUALUQER COISA EM JAVASCRIPT QUE SERA INTERPRETADO E EXECUTADO
				console.log('BOTAO IGUAL CLICADO');
				let conta = this.display.value;

				try	{
					conta = eval(conta);

					if(!conta)	{
						alert('Conta iválida!');
						return;
					}
					this.display.value = String(conta);
				} catch(e)	{
					alert('Conta iválida!');
					return;
				}
			},


			cliqueBotoes()	{
				// aqui o THIS é a calculadora
				document.addEventListener('click', e =>	{
					const el = e.target; // evento que vem do add event listener

					if (el.classList.contains('btn-num'))	{
						this.btnParaDisplay(el.innerText); // se usar o THIS aqui a função que esta chamando é o document
					}

					if(el.classList.contains('btn-clear'))	{
						this.clearDisplay();
					}

					if(el.classList.contains('btn-del'))	{
						this.apagaUm();
					}

					if(el.classList.contains('btn-Eq'))	{
						this.realizaConta();
					}



				//}.bind(this));
				});
			},

			btnParaDisplay(valor)	{
				this.display.value += valor;
			}

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();