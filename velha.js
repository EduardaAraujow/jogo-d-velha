const jogador1 = "X";
const jogador2 = "O";

var vezDoJogador = jogador1;
var gameOver = false;

AtualizarJogadorAtual();
ComecarJogo();

function AtualizarJogadorAtual() {
 
 if (gameOver) {return;}

 if (vezDoJogador == jogador1) {

  var jogador = document.querySelectorAll('div#container img')[0];
  jogador.setAttribute("src","x.jpg");
 }
 else{
  var jogador = document.querySelectorAll('div#container img')[0];
  jogador.setAttribute("src","bola.jpg");
 }
}

function ComecarJogo(){

 var espacos = document.getElementsByClassName('espaco');
 for (var i = 0; i < espacos.length; i++) {

  espacos[i].addEventListener('click', function(){

   if (gameOver) {return;}

   if (this.getElementsByTagName("img").length == 0) {

    if (vezDoJogador == jogador1) {
     this.innerHTML = "<img src='x.jpg'>";
     this.setAttribute("jogada", jogador1);
     vezDoJogador = jogador2;
    }
    else{
     this.innerHTML = "<img src='bola.jpg'>";
     this.setAttribute("jogada", jogador2);
     vezDoJogador = jogador1;
    }
    AtualizarJogadorAtual();
    VerificarVencedor();
   }
  });
 }
}

async function VerificarVencedor() {
 var espacos = document.getElementsByClassName('espaco');
 var espacoId = [];
 var vencedor = "";
 var empate = 0;
 for (var i = 0; i < espacos.length; i++) {
  espacoId[i] = espacos[i].getAttribute("jogada");
 }
 empate = espacoId.indexOf("");

 if((espacoId[0] == espacoId[1]) && (espacoId[0] == espacoId[2]) || (espacoId[0] == espacoId[3]) && (espacoId[0] == espacoId[6]) || (espacoId[0] == espacoId[4]) && (espacoId[0] == espacoId[8])){
  vencedor = espacoId[0];


 }
 else if((espacoId[4] == espacoId[1]) && (espacoId[4] == espacoId[7]) || (espacoId[4] == espacoId[3]) && (espacoId[4] == espacoId[5]) || (espacoId[4] == espacoId[2]) && (espacoId[4] == espacoId[6])){
  vencedor = espacoId[4]; 


 }
 else if((espacoId[8] == espacoId[5]) && (espacoId[8] == espacoId[2]) || (espacoId[8] == espacoId[7]) && (espacoId[8] == espacoId[6])){
  vencedor = espacoId[8];

 }
 else if (empate == -1) {
  gameOver = true;

  await sleep(50);

  alert("Empate !!");

  var valorStyle = "color: white; background: blue;";
  var btnRecomecar = document.getElementById('btnRecomecar');
  btnRecomecar.removeAttribute("disabled");
  btnRecomecar.setAttribute("style", valorStyle);

  btnRecomecar.addEventListener('click', function () {
   window.location.reload();
  });
 }
 if(vencedor != ""){
  gameOver = true;

  await sleep(50);

  alert("O vencedor é: " + vencedor);

  var valorStyle = "color: white; background: blue;";
  var btnRecomecar = document.getElementById('btnRecomecar');
  btnRecomecar.removeAttribute("disabled");
  btnRecomecar.setAttribute("style", valorStyle);

  btnRecomecar.addEventListener('click', function () {
   window.location.reload();
  });
 }
}

function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}