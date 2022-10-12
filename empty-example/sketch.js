let xBolinha = 300;
let yBolinha = 200;
let diametreo = 15;

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
    circle(xBolinha, yBolinha, diametreo)
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeyBolinha;

    if (xBolinha > width || xBolinha < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0) {
        velocidadeyBolinha *= -1;
    }
}