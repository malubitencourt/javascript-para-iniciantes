// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Malu',
  sobrenome: 'bitencourt',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
carro.dadosCompletos = function(){
  return `${this.preco} ${this.portas} ${this.marca}`
}
console.log(carro.dadosCompletos())


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  idade: '10 anos',
  estimativaVida: '15 anos',
  cor: 'preto',
  latir(pessoa){
   if (pessoa === 'homem'){
     return 'latir';
    } else {
      return 'nada';
    } 
}
}
