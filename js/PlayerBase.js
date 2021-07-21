class PlayerBase {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
if(playerArcherLife === 0){
  isStatic:false
}
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base1.png");

    World.add(world, this.body);
    
  }
  gameOver(playerLife){
    this.playerLife=playerLife;
    if(this.playerLife === 0){
    this.body.isStatic=false;
    }
   }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
