console.log('Olá mundo!');

let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

let elementoBody = document.body;

elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

let botao = document.createElement('button');
botao.innerText = 'Clique aqui!';
document.body.appendChild(botao);

botao.onclick = function() {
    let mensagem = document.createElement('p');
    mensagem.innerText = 'Você clicou no botão!';
    document.body.appendChild(mensagem);
}

let dataHora = new Date();
let dataElemento = document.createElement('p');
dataElemento.innerText = `Data e hora atuais: ${dataHora.toLocaleString()}`;
document.body.appendChild(dataElemento);

let textoPiscar = document.createElement('h2');
textoPiscar.innerText = 'Texto piscando!';
document.body.appendChild(textoPiscar);

setInterval(() => {
    textoPiscar.style.visibility = (textoPiscar.style.visibility === 'hidden' ? 'visible' : 'hidden');
}, 500);  

document.title = 'Página Criativa - Olha o título mudando!';

let nome = prompt('Qual é o seu nome?');
let mensagemPersonalizada = document.createElement('h2');
mensagemPersonalizada.innerText = `Bem-vindo, ${nome}!`;
document.body.appendChild(mensagemPersonalizada);
