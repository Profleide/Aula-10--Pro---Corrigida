/* Criar uma matriz notas e add valores no indice.
// variavel global 
obs. variavel e onde guarda informações.*/
var notas = [30,20,25,35,40];

function setup() 
{
  createCanvas(400,400);
  // criar duas matriz uma nota e outra media
  // primeira vai somar todas as notas
  // segunda vai da media fazendo leitura do tamanho da matriz
  var soma = notas[0] + notas [1] + notas [2] + notas [3] + notas [4];
  var media= soma/ notas.length;
  // mandar imprimir na tela a media tirada
  console.log("A soma é: " +soma);
  console.log("Media é " + media);
}

function draw() 
{
background(51);

}

