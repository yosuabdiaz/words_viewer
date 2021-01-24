//let angles = [30, 10, 45, 35, 60, 38, 75, 67];

function setup() {
  var w = 900;
  var h = 600;

  canvas = createCanvas(w, h);
  info = createDiv("");
  info.id("info");
  canvas.position(500,200);
}

function dotLine(xpos, calificacion)
{ 
  var dotPos = 450;
   // Make the points 10 pixels in size

  for(var i=0; i <= 85; i++){
    stroke('green'); // Change the color
    strokeWeight(2);
    point(xpos, dotPos);
    dotPos = dotPos - 5;
  }
}

function circulo(diametro) {
  //var palabras = [];
  //let lastAngle = 0;

  background(255, 255, 255);

  fill('gray');

  circle(width / 2, height / 2, diametro);

  translate(width/2, height/2);

  for (var i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI * i / 8);

    //var size = Math.floor(Math.random() * 15);
    var size = 10;
    textSize(21 + size);
    var palabra = 'word ' + i

    //palabras.push({origen: palabra, destino: 'word ' + i + 1 });

    text(palabra, 200, 30);

    stroke(251, 133, 0);
    strokeWeight(5);
    line(0, 0, 100, 108);

    fill(0, 102, 153);
    
    pop();
  }
}

function draw() {
  push();
  background(240);
  textFont("LemonMilk");
   {
    
    fill(51, 153, 250);
    stroke(211, 211, 211);  
  

    dotLine(100, 2);
    dotLine(140, 3);
    dotLine(200, 4);
    dotLine(260, 1);
    dotLine(320, 5);
    dotLine(380, 4);
    dotLine(440, 3);
    dotLine(500, 1);
    dotLine(560, 5);
    dotLine(620, 4);
    dotLine(680, 3);
    dotLine(740, 1);
  
  }

  pop();

  textSize (12); 
  fill(1, 19, 28);
  text('Amazon Sentiment Analysis',405,20);
  

  if (mouseIsPressed) {
    circulo(300);
  }

  else{
    line(60, 450, 750, 450)
    line(60, 450, 60, 10)
    {
      fill(0, 0, 0);
      textAlign(CENTER);
      text('Enero', 90,470);
      text('Febrero', 150,470);
      text('Marzo', 210,470);
      text('Abril', 270,470);
      text('Mayo', 330,470);
      text('Junio', 390,470);
      text('Julio', 450,470);
      text('Agosto', 510,470);
      text('Setiembre', 570,470);
      text('Octubre', 630,470);
      text('Noviembre', 690,470);
      text('Diciembre', 750,470);
        
      fill (0,0,0);
      text(0,50,449);
      text(1,50,369);
      text(2,50,289);
      text(3,50,199);
      text(4,50,109);
      text(5,50,20);
        
      text('C',10, 150);
      text('A',10, 170);
      text('L',10, 200);
      text('I',10, 220);
      text('F',10, 240);
      text('I',10, 260)
      text('C',10, 280);
      text('A',10, 300);
      text('C',10, 320);
      text('I',10, 340);
      text('O',10, 360);
      text('N',10, 380);
      textSize(10);  
    }
  }
}

