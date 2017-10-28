var bubbles = [];

function setup() { 
  createCanvas(600, 600);
  
  for(let i=0; i<5
      ; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10,60);
  let e = random(10,60)
  let c1 = random(0,255);
  let c2= random(0,255);
  let c3 = random(0,255);
  let b = new Bubble(x,y,r,e,c1,c2,c3);           
  bubbles.push(b);                
       }  
  } 

function draw() { 
  background(111);
  for(let i=0; i<bubbles.length; i++){
  bubbles[i].show();
  bubbles[i].move();}
   }

function mousePressed(){
  for(var i = 0; i<bubbles.length; i++){
    if (bubbles[i].contains(mouseX,mouseY))
      bubbles.splice(i,1);
          }}

bubbles[2].changeColor();

// below is the CLASS BUBBLE which is template for creating as many bubbles as required.
//==============================
class Bubble {
  constructor(x,y,r,e,c1,c2,c3){
    this.x=x;
    this.y=y;
    this.r=r;
    this.e=e;
    this.c1=c1;
    this.c2=c2;
    this.c3=c3;
    
  };  
  move(){
    this.x=this.x+random(0,5);
    this.y=this.y+random(0,-5);
    if (this.y < 0) {
    this.y = 600;
  }
    if (this.x > 600){
      this.x=0;
    }
    
  };  
  show(){
    stroke(255);
    strokeWeight(1);
    var c = color(this.c1,this.c2,this.c3)
    fill(c);
    ellipse(this.x, this.y, this.r*2,this.e);
  };
  
  changeColor(){
    this.fill(red);
      }
  
  contains(x,y){
    let d= dist(x,y,this.x,this.y);
    return (d < this.r)
    
  };
  
}