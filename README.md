# pong-em-javascript
Aprendendo a fazer o jogo do Pong no Java Script | Aprendi na Alura

<h1>Módulo 1: Iniciando no JavaScript</h1>
>Usando a biblioteca do P5
<p>Precisei baixar a extenção do p5 para usar a biblioteca do p5.<br>
No setup, definimos a palco do jogo usando o createCanvas. Definimos a posição relativa a tela do windown usando position.<br>
No draw, pintamos o palco de preto usando o backgroung, a bolinha usando o circle (onde os parametros são: posiçãoX, posiçãoY, diamentro). Movimentamos a bolinha alterando o a sua posição (simulamos isso usando as variáveis velocidadeXbolinha e velocidadeYBolinha)
</p>

>Fazendo a bolinha voltar ao bater nas bordas
<p> Para fazer isso, usamos a estrutura de condição If, onde verificamos se a posição da bolinha, nos dois eixos, estão ultrapassando o limite do "width" e "height". <br>Se sim, multiplicamos o valor da velocidade X e Y da bolinha -1. Isso fará com que o valor inicial (6) se tranforme em (-6) fazendo com que a bolinha volte.
</p>