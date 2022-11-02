//Tamanho da bolinha
let bolinha = {
    posicaoX: 300,
    posicaoY: 200,
    diametro: 15,
    raio: 7.5
}

// Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeyBolinha = 6;

// variaveis da raquete
let raquete = {
    posicaoX: 5,
    posicaoY: 150,
    largura: 10,
    comprimento: 90
}

// variaveis da raquete do oponente
let raqueteOponente = {
    posicaoX: 585,
    posicaoY: 150,
    velocidadeYOponente: 0
}

//Palco
function setup() {
    var cnv = createCanvas(600, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

let colidiu = false;

//Desenha no palco
function draw() {
    background(0)
    desenhaBolinha();
    mostrarRaquete(raquete.posicaoX, raquete.posicaoY);
    mostrarRaquete(raqueteOponente.posicaoX, raqueteOponente.posicaoY);
    movimentaBolinha();
    movimentarRaquete();
    verificaColisaoBorda();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(raquete.posicaoX, raquete.posicaoY);
    movimentarRaqueteOponente();
    verificaColisaoRaquete(raqueteOponente.posicaoX, raqueteOponente.posicaoY);
}

function desenhaBolinha() {
    circle(bolinha.posicaoX, bolinha.posicaoY, bolinha.diametro)
}

function movimentaBolinha() {
    bolinha.posicaoX += velocidadeXBolinha;
    bolinha.posicaoY += velocidadeyBolinha;
}

function verificaColisaoBorda() {
    if (bolinha.posicaoX + bolinha.raio > width || bolinha.posicaoX - bolinha.raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (bolinha.posicaoY + bolinha.raio > height || bolinha.posicaoY - bolinha.raio < 0) {
        velocidadeyBolinha *= -1;
    }
}

function mostrarRaquete(x, y) {
    rect(x, y, raquete.largura, raquete.comprimento)
}

function movimentarRaquete() {
    if (keyIsDown(UP_ARROW)) {
        raquete.posicaoY -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        raquete.posicaoY += 10;
    }
}

function verificaColisaoRaquete() {
    if (bolinha.posicaoX - bolinha.raio < raquete.posicaoX + raquete.largura && bolinha.posicaoY - bolinha.raio < raquete.posicaoY + raquete.comprimento && bolinha.posicaoY + bolinha.raio > raquete.posicaoY) {
        velocidadeXBolinha *= -1
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raquete.largura, raquete.comprimento, bolinha.posicaoX, bolinha.posicaoY, bolinha.diametro);
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    if (colidiu) {
        velocidadeXBolinha *= -1
    }
}

function movimentarRaqueteOponente() {
    raqueteOponente.velocidadeYOponente = bolinha.posicaoY - raqueteOponente.posicaoY - raquete.comprimento / 2 - 30;
    raqueteOponente.posicaoY += raqueteOponente.velocidadeYOponente;
}