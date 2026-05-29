// Tamanho da tela
let alturaDaTela;
let larguraDaTela;

//console.log(`Tamanho da tela: ${alturaDaTela}, ${larguraDaTela}`);

const palco = document.getElementById('palco');

function ajustarTela() {
    alturaDaTela = window.innerHeight;
    larguraDaTela = window.innerWidth;

    //console.log(`Tamanho da tela: ${alturaDaTela}, ${larguraDaTela}`);

    palco.style.width = larguraDaTela + "px";
    palco.style.height = alturaDaTela + "px";
};

ajustarTela();
window.addEventListener("resize", function() {
    ajustarTela();
});