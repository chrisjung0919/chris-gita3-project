class Bullet {
  constructor(x, y, direction, speed) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = speed;
    this.size = 10;
  }
  
  move() {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
  }
  
  display() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}