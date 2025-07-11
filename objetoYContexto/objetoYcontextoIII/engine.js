export class FigureEngineRenderer {
  constructor(figure_id) {
    this.canvas = document.getElementById(figure_id)
    this.ctx = this.canvas.getContext("2d")

    this.shapes = []
    this.shapeActive = null

    this.table = document.querySelector("#figures-table tbody")
    this.activeSpan = document.getElementById("active-figure")
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let shape of this.shapes) {//for of
      shape.draw(this.ctx)
    }
  }

  highlight(row) {
    for (let r of this.table.rows) r.classList.remove("selected")
    row.classList.add("selected")
  }

  addTable(shape) {
    const row = document.createElement("tr")
    row.innerHTML = `<td>${shape.constructor.name}</td><td>${shape.id}</td>`
    this.table.appendChild(row)
    row.addEventListener("click", () => {
      this.shapeActive = shape
      this.activeSpan.textContent = shape.id
      this.highlight(row)
    })
  }

  addShape(shape) {
    this.shapes.push(shape)
    this.render()
    this.addTable(shape)
  }

  moveActiveShape(x, y) {
    if (this.shapeActive) {
      this.shapeActive.move(x, y)
      this.render()
    }
  }
}
