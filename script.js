//jogadores
var toninho = {
  nome:"Toninho",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}
var alice = {
  nome: "Alice",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}
//declarando função de exibir na tabela
function exibirNaTela () {
//elementos da tabela
var elementoTabela=document.getElementById('tabelaJogadores')
  elementoTabela.innerHTML = `
  <tr>
        <td>${toninho.nome}</td>
        <td>${toninho.vitoria}</td>
        <td>${toninho.empate}</td>
        <td>${toninho.derrota}</td>
        <td>${toninho.pontos}</td>
        <td><button onClick="adicionarVitoria(toninho)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(toninho )">Empate</button></td>
        <td><button onClick="adicionarDerrota(toninho)">Derrota</button></td>
  </tr>
  `;
}
//Chamando funçao de exibir na tela
exibirNaTela();
//funçoes 
function adicionarVitoria(jogador){
  jogador.vitoria++ ;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empate++ ;
  jogador.pontos++ ;
  exibirNaTela ()
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  jogador.pontos = jogador.pontos + 0;
  exibirNaTela ()
}

