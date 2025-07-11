export class Shape {
  constructor(id, x, y, color) {
    this.id = id
    this.x = x
    this.y = y
    this.color = color
  }

  draw(ctx) {}
  move(dx, dy) {
    this.x += dx
    this.y += dy
  }
}
