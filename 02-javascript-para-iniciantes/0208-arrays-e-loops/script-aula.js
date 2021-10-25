// videoGames.push('xbox series s');
// var ultimoItem = videoGames.pop();

for (var numero = 1; numero <= 10; numero++) {
  console.log(numero);
}
// var i = 0;
// while (i <= 100) {
//   console.log(i);
//   i = i + 5;
// }

var videoGames = ['xbox', 'xbox 360', 'xbox one', 'xbox series s', 'xbox series x'];
for (var item = 0; item < 4; item++){
  console.log(videoGames[item]);
  if (videoGames[item] === 'xbox one'){
    break
  }
}


var frutas = ['banana', 'maça', 'mamão', 'melancia', 'tomate'];

frutas.forEach(function(fruta, index){
  console.log(fruta, index);
});