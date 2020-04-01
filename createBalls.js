class createBalls{
    constructor(r,g,b){
        this.radio=70;
        this.x=Math.round(Math.random()*1000)
        this.y=Math.round(Math.random()*1000)
        //movement
        this.speed=5;
        this.directionX = 2;
        this.directionY = 3;
        this.r=r;this.g=g;this.b=b;
    }
    display(){
      fill(color(this.r,this.g,this.b))
      ellipse(this.x, this.y, this.radio, this.radio)
    }

    rebote(ball){
        //console.log(this.x, ball.x)
        this.x -= this.directionX * this.speed ;
        this.y -= this.directionY * this.speed;
        if (this.x >= width ||
            this.x<= 0) {
          //console.log('choque con lado der/izq')
            this.directionX = -this.directionX;
          }
          else if (this.y>= height || 
                  this.y<= 0) {
           // console.log('choque con techo/piso')
            this.directionY = -this.directionY
          }
    }

    changeDirection() {
      this.directionX = -this.directionX;
      this.directionY = -this.directionY
    }

    collide(other) {
      let distance = dist(this.x, this.y, other.x, other.y);
      if (distance <= this.radio) {
        console.log('choque')
        return true
      }else{
        return false
      }
    }
}