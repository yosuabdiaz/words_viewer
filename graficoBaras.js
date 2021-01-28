//let angles = [30, 10, 45, 35, 60, 38, 75, 67];

const fileSelector = document.getElementById('file-upload');
let productos = [];
let datosArchivo = {};
var productSelect = document.getElementById("productSelect");
let valoresMensuales = {"ENERO": 0, "FEBRERO": 0, "MARZO": 0, "ABRIL": 0, "MAYO": 0, "JUNIO": 0, "JULIO": 0
, "AGOSTO": 0, "SEPTIEMBRE": 0, "OCTUBRE": 0, "NOVIEMBRE": 0, "DICIEMBRE": 0};

let palabrasMensuales = {"ENERO": "", "FEBRERO": "", "MARZO": "", "ABRIL": "", "MAYO": "", "JUNIO": "", "JULIO": ""
, "AGOSTO": "", "SEPTIEMBRE": "", "OCTUBRE": "", "NOVIEMBRE": "", "DICIEMBRE": ""};


fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;

  var fileInput = fileList[0];

  Papa.parse(fileInput, {
    complete: function (results) {
      let datosCsv = results.data;
      let headers = datosCsv[0];
      let objetosJson = [];

      for (var registro of datosCsv.slice(1)) {
        var objeto = {};

        for (var propiedad of headers) {
          objeto[propiedad] = registro[headers.indexOf(propiedad)];
        }

        objetosJson.push(objeto);
      }

      var sel = document.getElementById('productSelect');

      productos = [...new Set(objetosJson.map(item => item.NOMBREPRODUCTO))];

      for(var i = 0; i < productos.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = productos[i];
        opt.value = productos[i];
        sel.appendChild(opt);
    }

      datosArchivo = objetosJson;
      console.log("THIS IS THE LIST ", objetosJson);
    }
  });
});


function visualizar() {
  var selectedProduct = productSelect.value;

  for (var mes of Object.keys(valoresMensuales)) {
    var tempProducto = datosArchivo.filter(elemento => elemento.NOMBREPRODUCTO == selectedProduct && elemento.MES == mes);
    valoresMensuales[mes] = tempProducto[0].CALIFICACION;
    palabrasMensuales[mes] = tempProducto[0].PR_1;
  }

  console.log("Valores mensuales ", valoresMensuales);
}


function setup() {
  var w = 900;
  var h = 600;

  canvas = createCanvas(w, h);
  info = createDiv("");
  info.id("info");
  canvas.position(500,200);
}

function dotLine(mes, calificacion)
{ 

  let posiciones = {"ENERO": 100, "FEBRERO": 140, "MARZO": 200, "ABRIL": 260, "MAYO": 320, "JUNIO": 380, "JULIO": 440
  , "AGOSTO": 500, "SEPTIEMBRE": 560, "OCTUBRE": 620, "NOVIEMBRE": 680, "DICIEMBRE": 740}

  var dotPos = 450;
  var initialPos = 10 + (500 * (1/(calificacion*2))); 
   // Make the points 10 pixels in size

  console.log("Posicion! para ", {"mes": mes, "calificacion": initialPos});

  text(palabrasMensuales[mes], posiciones[mes], initialPos - 10);

  push();
  for(var i= initialPos; i <= 450; i+=5){
    stroke('green'); // Change the color
    strokeWeight(2);
    point(posiciones[mes], i);

    //dotPos = dotPos + 5;
  }
  pop();
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

    dotLine("ENERO", valoresMensuales["ENERO"]);
    dotLine("FEBRERO", valoresMensuales["FEBRERO"]);
    dotLine("MARZO", valoresMensuales["MARZO"]);
    dotLine("ABRIL", valoresMensuales["ABRIL"]);
    dotLine("MAYO", valoresMensuales["MAYO"]);
    dotLine("JUNIO", valoresMensuales["JUNIO"]);
    dotLine("JULIO", valoresMensuales["JULIO"]);
    dotLine("AGOSTO", valoresMensuales["AGOSTO"]);
    dotLine("SEPTIEMBRE", valoresMensuales["SEPTIEMBRE"]);
    dotLine("OCTUBRE", valoresMensuales["OCTUBRE"]);
    dotLine("NOVIEMBRE", valoresMensuales["NOVIEMBRE"]);
    dotLine("DICIEMBRE", valoresMensuales["DICIEMBRE"]);
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

