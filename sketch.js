var coordiantes;
var colourInput; 
var colour;


function setup() {
  createCanvas(400,400);
   coordiantes=[];
   colourInput=createInput('Enter the HEX code of the colour you want');
   colour="FFF";
   background("#000000");
}

function draw() {
  colourInput.position(600,100);
  colour=this.colourInput.value();
  stroke("#"+colour);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    coordiantes.push((mouseX, mouseY));
    console.log(coordiantes);
  }
  
}

