var pessoa = {
  nome: 'malu',
  idade: 23,
  profissao: 'dev',
  possuiFaculdade: false,
}
console.log(pessoa.nome)
console.log(typeof pessoa)

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado){    
    return this.lados * lado;
  },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))


Math.PI

console.log(Math.random())

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height
  }
}
menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder= function() {
  return 'escondi';
}
var bg = menu.backgroundColor; 
