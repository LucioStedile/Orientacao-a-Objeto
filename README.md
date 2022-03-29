# Orientacao-a-Objeto
Exercícios de Orientação a Objeto com JavaScript


Usando O Chrome, digitar estes comandos no console

const minhaConta = new ContaCorrente(1, 234, true)
undefined
minhaConta.saldo
0
minhaConta.depositar(1000)
1000
minhaConta.sacar(500)
500
minhaConta.saldo
500
minhaConta.sacar(600)
'Operação negada'



const contaPoup = new ContaPoupanca(1, 22)
undefined
const contaUni = new ContaUniversitaria(1, 22)
undefined
contaUni.depositar(1000)
1000
contaUni.sacar(500)
undefined
contaUni.depositar(1000)
1500
contaUni.sacar(550)
'Operação Inválida!'
