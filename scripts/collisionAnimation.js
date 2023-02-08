export class CollisionAnimation {
  constructor(game, x, y) {
    this.game = game;
    this.image = boomImage;
    this.x = x;
    this.y = y;
    this.spriteWidth = 100;
    this.spriteHeight = 90;
    this.sizeModifier = Math.random() + 0.5;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.frameX = 0;
    this.maxFrame = 4;
    this.markForDeletion = false;
    this.fps = Math.random() * 10 + 5;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }
  draw(context) {
    context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
  update(delta) {
    this.x -= this.game.speed;
    if (this.frameTimer > this.frameInterval) {
      this.frameX++;
      if (this.frameX > this.maxFrame) this.markForDeletion = true;
      this.frameTimer = 0;
    } else this.frameTimer += delta;
  }
}
