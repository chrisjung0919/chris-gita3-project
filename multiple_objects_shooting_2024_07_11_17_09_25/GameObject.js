class GameObject {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = random(20, 40);
    this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();
  }
  
  move() {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
    
    // check if object is off canvas
    if (this.x < 0 || this.x > width) {
      this.direction.x *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.direction.y *= -1;
    }
  }
  
  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  shoot() {
    let direction = createVector(random(-1, 1), random(-1, 1)).normalize();
    let bullet = new Bullet(this.x, this.y, direction, bulletSpeed);
    return bullet;
  }
}