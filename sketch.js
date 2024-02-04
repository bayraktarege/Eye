let slid = 0;
let images = [];
let extraCanvas;
let loadpix = false;
let slids = []
let n = 10;
let br;
let bg;
let bb;
let cont;
let slll = 1.5

function preload() {
  names = loadStrings("/song4s.txt");
}

function setup() {
  createCanvas(2000, 2000);
  extraCanvas = createGraphics(width, height)
  extraCanvas.clear()
  //cont = new Cont(width/2, height/2, n)

  for (let i = 0; i < names.length-1; i++){
    //console.log(names[i])
    images[i] = loadImage("/pics4/"+names[i]);
  }
  slid = new Slider(width/2, height/2, 160/slll, 2.5/slll, images)
  slids.push(slid)
  for (let o = 1; o<n;o++){
    let slidr = new Slider(slid.quads[slid.quads.length-1].x, slid.quads[slid.quads.length-1].y, 320/(o/2+slll), 5/(o/2+slll), images)
    slidr.hook = slids[o-1]
    slids.push(slidr);
  }
  slids[slids.length-1].loadpix()
  br = random(255)
  bg = random(255)
  bb = random(255)
  
 
  //slid.loadpix();
}

function draw() {

  //background(br, bg, bb);
  background(0, 0, 0);
  //background(250);
  smooth(8)
  //background(255, 223, 196);
  //cont.update()
  
  for (let r = 0; r<slids.length-1; r++){
    if (!slids[r].load){
      slids[r].loadpix()
  
      slids[r].load = true;
      slids[r].update()
      slids[r].move()
    } else {
      slids[r].update()
      slids[r].move()
      //fill(100)
      //circle(slids[r].quads[slids[r].quads.length-1].x, slids[r].quads[slids[r].quads.length-1].y, 10)

    }
    //if (r!=0 && r%2==0){
    //  slids[r].show()
    //}
    if (r!=0 && r%2==0){
      slids[r].show()
    }

    
    
  }
  slids[slids.length-1].update()
  slids[slids.length-1].move()
  slids[slids.length-1].show()
  


  //background(slid.imagArray1[0][0])
  //tint(255, 100)
  img = image(extraCanvas, 0, 0)
  if (slids[slids.length-1].t > 3*TWO_PI/1.46){
    saveCanvas(img, "statistik1.png");
    slids = []
    setup()
  }
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    //saveGif('mySketch', 1, {units:"frames", delay: 5});
    //saveCanvas(extraCanvas, "uno.jpg");
    //save(img, "dos.png");
    saveCanvas(img, "vort.png");
  }
}