x = 0;
y = 0;
texto = "";
imagem = "";
W = 0;
H = 0;
speakData = "";

to_number = 0;

Desenho = "";


function preload() 
{
    imagem = loadImage("ii.png")
}

var Speech = window.webkitSpeechRecognition;

var recognition = new Speech();



function start() 
{

    document.getElementById("estado").innerHTML = "O sistema está ouvindo !";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    
    var content = event.results[0][0].transcript;
    document.getElementById("estado").innerHTML = "A fala é: " + content;

    to_number = Number(content);

    if (Number.isInteger(to_number)){
        document.getElementById("estado").innerHTML = "Desenhando uma nota musical";
        desenho = "set";
    }

    else{
        document.getElementById("estado").innerHTML = "Você é muito complexo para mim !";

    }

    if (content = "círculo");
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("estado").innerHTML = "Desenhando um círculo";
        círculo = "set";
    }} 

function setup(){
    canvas = createCanvas(900, 600);
    canvas.center()
}

function draw() {
    if(drawApple == "set")
    {
      document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
      drawApple = "";
    }
  }
  
  function speak(){
      var synth = window.speechSynthesis;
  
      var utterThis = new SpeechSynthesisUtterance(speakData);
  
      synth.speak(utterThis);
  
      speakData = "";
  }