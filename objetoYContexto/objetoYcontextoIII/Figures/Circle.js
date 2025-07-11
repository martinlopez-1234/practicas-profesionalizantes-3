import { Shape } from "../Shape.js"

export class Circle extends Shape {
  constructor(id, x, y, radius, color) {
    super(id, x, y, color)
    this.radius = radius
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill()
  }
}
