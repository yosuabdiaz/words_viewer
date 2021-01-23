
function setup() {
  var w = 900;
  var h = 600;

  canvas = createCanvas(w, h);
  info = createDiv("");
  info.id("info");
  canvas.position(500,200);
}

function draw() {
  background(240);
  textFont("LemonMilk");
   {
 fill(51, 153, 250);
  stroke(211, 211, 211);
  rect(60, 330, 55, 119);
  rect(150, 230, 55, 219);
  rect(240, 290, 55, 159);
  rect(330, 50, 55, 400);  
     rect(420, 242, 55, 209);
     rect(510, 222, 55, 229);
     rect(600, 10, 55, 440);
       rect(690, 220, 55, 230);
   
     text('Mens salary',280, 500); 
     fill(51, 153, 250);
     rect(330,480,30,30);
}
 textSize (12); 
    fill(255, 51, 153);
    text('The Gender Pay Gap',405,20);

  if (mouseIsPressed) {   
      fill(255, 51, 153);
   rect(60, 360, 55, 88);
    rect(150, 300, 55, 149);
    rect(240, 340, 55, 109);
      rect(330, 105, 55, 345);
    rect(420, 295, 55, 155);
    rect(510, 275, 55, 175);
    rect(600, 170, 55, 280);
    rect(690, 300, 55, 150);

       text('Womens salary',430, 500); 
     fill(255, 51, 153);
rect( 500,480,30,30);
    
fill(255, 255, 255);
textAlign(CENTER);
  text('-30.1%', 90, 400);
    text('-40.4%', 180, 400);
      text('-50.1%', 270, 400);
   text('-20.4%', 360, 400);
   text('-36.5%', 450,400);
    text('-35.8%', 540,400);
    text('-60.7%', 630,400);
     text('-24.8%', 720,400);
    
  }
 
  line(60, 450, 750, 450)
  line(60, 450, 60, 10)
  {
    
 
 fill(0, 0, 0);
  textAlign(CENTER);
text('Janitorial', 90,470);
    text('Police', 180,470);
      text('Construction', 270,470);
    text('Law', 360,470);
       text('Real Estate', 450,470);
     text('Engineering', 540,470);
    text('Medical', 630,470);
    text('AVERAGE', 720,470);
    
    fill (0,0,0);
text(0,50,449);
text(20,50,369);
  text(40,50,289);
   text(60,50,199);
    text(80,50,109);
    text(100,50,20);
    
    text('I',10, 150);
    text('N',10, 170);
    text('T',10, 200);
    text('H',10, 220);
    text('0',10, 240);
     text('U',10, 260)
      text('S',10, 280);
    text('A',10, 300);
     text('N',10, 320);
      text('D',10, 340);
     text('S',10, 360);
    textSize(10);
    
  }

}

