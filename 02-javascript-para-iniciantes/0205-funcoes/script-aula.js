function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7

console.log(pi());

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(100, 1.78))

function corFavorita(cor) {
  if(cor === 'azul')
    return 'eu gosto do céu';
    else if (cor === 'verde') {
    return 'eu gosto da floresta';
  } else {
    return 'eu não gosto de cores';
  }
}
console.log(corFavorita('azul'))

addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
} 

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined



function terceiraIdade(idade) {
  if(typeof  idade !== 'number')
   return 'por favor preencha um número'
    else if(idade >= 60){
    return true
  } else {
    return false
  }
}
console.log(terceiraIdade('oi'))

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
    return`Faltam visitar ${totalPaises - paisesVisitados} paises`
}
console.log(faltaVisitar(23))


imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
