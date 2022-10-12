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

>O limite deve ser a borda da bolinha e não o centro
<p>Corrigido o erro onde metade da bolinha ultrapassa o limite do palco. Isso ocorre que a possição da bolinha é o seu centro e não as suas extremidades.<br>Isso foi corrido adicionando a variável "raio", que seria a metade do diametro. Adicionamos ou subtraímos o valor de raio nas codições Ifs
</p>

>Refatorando separando as funções e comentando o código
<p>A função Draw estava cuidando de todas as tarefas de nosso jogo. Isso não é uma boa prativa. Por isso, separamando as tarefas criando outra funções.<br>
Também comentamos em nosso cógido para facilitar o entendimento do mesmo.
</p>