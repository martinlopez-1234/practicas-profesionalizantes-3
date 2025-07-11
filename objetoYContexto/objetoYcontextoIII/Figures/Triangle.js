import { Shape } from "../Shape.js"

export class Triangle extends Shape {
  constructor(id, x, y, side, color) {
    super(id, x, y, color)
    this.side = side //largo
  }

  draw(ctx) {
    const height_triangle = (Math.sqrt(3) / 2) * this.side
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + this.side, this.y)
    ctx.lineTo(this.x + this.side / 2, this.y - height_triangle)
    ctx.closePath()
    ctx.fill()
  }
}
