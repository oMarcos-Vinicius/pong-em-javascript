# pong-em-javascript
Aprendendo a fazer o jogo do Pong no Java Script | Aprendi na Alura

<h1>Módulo 1: Pong no Scratch</h1>

<h1>Módulo 2: Iniciando no JavaScript</h1>

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

<h1>Módulo 3: Criando minha raquete no Jogo</h1>

>Criando minha raquete.
<p> Na biblioteca do p5, encontramos a função rect para desenhar um retangulo. Definimos quatro paremetros: (x,y,width,heigth).<br>
Aproveitei para transformar os meus lets em um array.
</p>

>Movimentando minha raquete
<p>Para movimentar a raquete alteramos o valor da posicaoY para mais 10 ou menos 10 caso a tecla pra cima ou para baixo esteja precionada.<br>
Para validarmos se a tecla está precionada, usamos a função do p5: keyIsDown
</p>

>Colisão com a raquete
<p>usamos um if para verificar se o a posição X e Y da bolinha e menor que a posição X e Y da raquete. Em caso afirmativo, invertemos a direção da bolinha. -- tive dificuldades nessa aula --
</p>

>Importando outra biblioteca
<p>Importamos uma biblioteca do p5 sobre colisões. E nela encontramos um função (collideRectCircle) que valida se um retagunlo está colidindo com um circulo. Baixamos a biblioteca e a importamos pelo index.html. Criamos a variavel "colidiu" como valor false. Criamos a função verificaColisaoRaqueteBiblioteca e dentro dela usamos a função da biblioteca collideRectCircle passando os parametros: x da raquete, y da raquete, lagura da raquete, comprimento da raquete, x da bolinha, y da bolinha, diametro da bolinha.
collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
</p>

<h1>Módulo 4: Criando a Raquete do Oponente</h1>

> Raquete do Oponente
<p>Criamos as variaveis para raquete. Usamos a mesma função "mostrarRaquete" motivicando ela para receber paramentros x e y.<br>
Criamos o movimento por meio da função "movimentarRaqueteOponente" **Não entendi como funciona essa função**
</p>

>Colisão com o Oponete
<p>Usamos a função "Verifica colisão, para verificar colisão da bolinha com a raquete do oponente.<br>
Para isso, precisamos mudar a estrutuda da função para receber parametros. Com isso, foi possivel usar a mesma função para verificar a colisão das duas raquetes.
</p>
