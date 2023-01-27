//variáveis
//torre e auxiliar de torre para imagem
var towerImg, tower;
//porta, portagrupo, auxiliar para imagem
var doorImg, door, doorsGroup;
//grade, auxiliar de imagem, Gradegrupo
var climberImg, climber, climbersGroup;
//fantasma, auxiliar de imagem
var ghost, ghostImg;
//bloco invisível, e grupo de bloco invisível
var invisibleBlockGroup, invisibleBlock;

//estado de jogo
var gameState = "play"

function preload() {
  //imagens
  towerImg = loadImage("tower.png"); //torre
  doorImg = loadImage("door.png"); //porta
  climberImg = loadImage("climber.png"); //grade
  ghostImg = loadImage("ghost-standing.png");//fantasma
  //som
  spookySound = loadSound("spooky.wav"); //som do jogo
}

function setup() {
  //criar o espaço no jogo
  createCanvas(600, 600);

  //colocar o som para tocar 
  spookySound.play();

  //sprite da torre e suas características
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  //sprite do fantasma e suas características 
  ghost = createSprite(200, 200, 50, 50);
  ghost.addImage("fantasma", ghostImg);
  ghost.scale = 0.3;

  //criação de grupos
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

}

function draw() {
  //fundo
  background("black");

  //verificação dos estados de jogo 
  //gamestate === "play"
  if (gameState === "play") {
    if (keyDown("left_arrow")) {
      ghost.x = ghost.x - 3


    }
    if (keyDown("right_arrow")) {
      ghost.x = ghost.x + 3

    }
    if (keyDown("space")) {
      ghost.velocityY = -10

    }
    ghost.velocityY = ghost.velocityY + 0.8

  }





  //recarregamento da imagem da torre
  if (tower.y > 600) {
    tower.y = 0;
  }

  //chamar a função de criar portas aqui
  criarPortas();

  //verificação de fim de jogo aqui




  //código para desenhar qualquer sprite
  drawSprites();
}

//tudo que acontece quando gameState === "end"




//criar função para criar portas 
function criarPortas() {
  //módulo(divisão onde é importante o resto)
  if (frameCount % 240 === 0) {
    door = createSprite(200, -50);
    climber = createSprite(200, 10);
    invisibleBlock = createSprite(200, 15);
    invisibleBlock.shapeColor = "blue";
    invisibleBlock.visible = false;

    //ADC VELOCIDADE
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //ADC IMAGENS 
    door.addImage("porta", doorImg);
    climber.addImage(climberImg);

    //POSIÇÃO DA PORTA DURANTE O JOGO
    door.x = Math.round(random(120, 400));
    //GRADE ACOMPANHA ESSA ALEÁTORIEDADE 
    climber.x = door.x;
    //TIJOLO INVISÍVEL TAMBÉM ACOMPANHA ISSO
    invisibleBlock.x = door.x;

    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;


    ghost.depth = door.depth;
    ghost.depth += 1;
  }
}