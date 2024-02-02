//intesivojs15
const   BotaoPlayPause = document.getElementById('play-pause');
const   audioCapitulo = document.getElementById('audio-capitulo');
const   NumeroCapitulos = 10;

let taTocando = 0;

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
BotaoPlayPause.addEventListener('click', tocarOuPausar);