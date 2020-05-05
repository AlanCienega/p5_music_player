var song
var button
var volHistory = []
var ancho = 1000, alto = 600
var red = 0, green = 0

function playPause() {
  if (song.isPlaying()) {
    song.pause()
  }else{
    song.play()
  }
}

function preload() {
  const queryString = window.location.search;
  if (queryString.length>0) {
    arreglo = queryString.split('?')
    song = loadSound(arreglo[1])
  } else {
    song = loadSound('8in8.mp3')
  }
  
}

function setup() {
  //COMENTAR angleMode PARA UN EFECTO DIFERENTE
  angleMode(DEGREES)
  createCanvas(ancho ,alto)
  button = createButton('playPause')
  button.mousePressed(playPause)
  song.play()
  amp = new p5.Amplitude()
}

function draw() {
  background(0)
  
  var vol = amp.getLevel()
  //noFill() para no rrellenar
  // noFill()
  fill(red,green,0)
  stroke(red,green,0)
  volHistory.push(vol)
  translate(width/2, height/2)

  beginShape()
  for(var i = 0; i < volHistory.length; i++){
    var r = (height/1.3 - map(volHistory[i], 0,1, height/2,0))
    var x = r * cos(i -90)
    var y = r * sin(i -90)
    vertex(x,y)
    red = parseInt(volHistory[i]*1000)
    green = parseInt(255-volHistory[i]*100)
  }
  endShape()
  if (volHistory.length>360) {
    volHistory.splice(0,1)
  }
  translate(0,0)
  stroke(0)
  fill(100)
  ellipse(0,0,200,200)
  fill(0)
  ellipse(0,0,50,50)
  //ellipse(100,100, 200, vol * 200, vol * 200)
}
