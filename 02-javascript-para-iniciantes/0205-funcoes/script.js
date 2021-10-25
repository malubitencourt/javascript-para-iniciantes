// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
  return !!dado;
}
console.log(isTruthy(20))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log (perimetroQuadrado(6))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('malu', 'bitencourt'))

// Crie uma função que verifica se um número é par
function isEven(numero){
  var modulo = numero % 2;
  if (modulo === 0){
    return 'é par'
  } else {
    return 'é impar'
  }
}
console.log(isEven(6194956498766))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado (dado){
  return typeof dado;
}
console.log (tipoDeDado(null))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener ('click', function() {
  console.log('malu bitencourt');
});


// Corrija o erro abaixo
  var totalPaises = 193;

function precisoVisitar (paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei (paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
console.log(precisoVisitar(20))