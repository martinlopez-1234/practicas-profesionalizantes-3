import { Shape } from "../Shape.js"

export class Rectangle extends Shape {
  constructor(id, x, y, width, height, color) {
    super(id, x, y, color)
    this.width = width
    this.height = height
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
