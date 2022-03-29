/*Atividade: Conta Bancária
    Nesta atividade, vamos testar os conceitos de Orientação para Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie uma classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter eo setter de saldo;
Dentro de ContaBancaria, os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrenteque herda todos esses parâmetros cartaoCredito; e ainda possui o parâmetro
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tiposeja 'conta corrente' por padrão;
Crie uma classe-ilha chamada ContaPoupancaque herda todos os parâmetros de ContaBancaria;
Crie uma classe-ilha chamada ContaUniversitariaque herda todos os parâmetros de ContaBancaria;
Faça com que o método seja apenas capaz saquede ContaUniversitariasacar valores menores que 500 reais .
© 2022 GitHub, Inc.
Termos
Privacidade
Segurança
Status
Documentos
Entre em contato com o GitHub
Preços
API
Treinamento
Blogue
Sobre*/

class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação Inválida!';
        }

        this._saldo = this._saldo - valor;
    }
}