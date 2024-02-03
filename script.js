//intesivojs15
//JS3001
//NODEJS
const   BotaoPlayPause = document.getElementById('play-pause');
const   audioCapitulo = document.getElementById('audio-capitulo');
const   botaoAvanca = document.getElementById('proximo');
const   botaoVoltar = document.getElementById('anterior');
const   nomeCapitulo = document.getElementById('capitulo');
const   NumeroCapitulos = 10;


let taTocando = 0;
let capituloAtual = 1;
function tocarFaixa(){
    audioCapitulo.play();
    BotaoPlayPause.classList.remove('bi-play-circle-fill');
    BotaoPlayPause.classList.add('bi-pause-circle-fill');
    
}
function pauseFaixa(){
    audioCapitulo.pause();
    BotaoPlayPause.classList.add('bi-play-circle-fill');
    BotaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar(){
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else{
        pauseFaixa();
        taTocando = 0;
    }
}
function proximaFaixa(){
    if (capituloAtual === NumeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1;
    }  
    audioCapitulo.src = "./books/dom-casmurro/"+capituloAtual+".mp3" 
    tocarFaixa();
    taTocando = 1; 
    trocarNomeFaixa();
}
function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = NumeroCapitulos;
    }else{
        capituloAtual = capituloAtual - 1;
    }  
    audioCapitulo.src = "./books/dom-casmurro/"+capituloAtual+".mp3" 
    tocarFaixa();
    taTocando = 1; 
    trocarNomeFaixa();
}
function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}
BotaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvanca.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
