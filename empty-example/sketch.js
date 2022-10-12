let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeyBolinha = 6;

function setup() {
    var cnv = createCanvas(600, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function draw() {
    background(0)
    circle(xBolinha, yBolinha, diametro)
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeyBolinha;

    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeyBolinha *= -1;
    }
}