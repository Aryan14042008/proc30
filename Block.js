class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
     if(this.body.speed<3){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,30,40,);
     }
     else{
      World.remove(world, this.body);
      this.visibility = this.visibility-3;
      push();
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
      }
      
     }
    }
