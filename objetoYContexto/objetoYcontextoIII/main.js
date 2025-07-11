import { FigureEngineRenderer } from "./engine.js"
import { Circle } from "./Figures/Circle.js"
import { Rectangle } from "./Figures/Rectangle.js"
import { Triangle } from "./Figures/Triangle.js"

class Controller {
  constructor(engine) {
    this.engine = engine

    document.addEventListener("keydown", (e) => {
      const movements = {
        ArrowUp: [0, -5],
        ArrowDown: [0, 5],
        ArrowLeft: [-5, 0],
        ArrowRight: [5, 0],
      }

      if (movements[e.key]) {
        const [x, y] = movements[e.key]
        this.engine.moveActiveShape(x, y)
      }
    })

    document
      .getElementById("btn-rect")
      .addEventListener("click", () => this.createRectangle())
    document
      .getElementById("btn-circ")
      .addEventListener("click", () => this.createCircle())
    document
      .getElementById("btn-triang-eq")
      .addEventListener("click", () => this.createTriangleEquilateral())
  }

  getColor() {
    return document.getElementById("color-picker").value
  }

  createCircle() {
    const id = prompt("Ingrese un ID unico para el circulo: ")
    const radius = parseInt(prompt("Radio: "))
    const x = parseInt(prompt("Coordenada X: "))
    const y = parseInt(prompt("Coordenada Y: "))
    const color = this.getColor()
    if (id && !isNaN(radius) && !isNaN(x) && !isNaN(y)) {
      this.engine.addShape(new Circle(id, x, y, radius, color))
    } else alert("Datos invalidos")
  }

  createRectangle() {
    const id = prompt("Ingrese un ID unico para el rectangulo: ")
    const width = parseInt(prompt("Ancho: "))
    const height = parseInt(prompt("Altura: "))
    const x = parseInt(prompt("Coordenada X: "))
    const y = parseInt(prompt("Coordenada Y: "))
    const color = this.getColor()
    if (id && !isNaN(width) && !isNaN(height) && !isNaN(x) && !isNaN(y)) {
      this.engine.addShape(new Rectangle(id, x, y, width, height, color))
    } else alert("Datos invalidos")
  }

  createTriangleEquilateral() {
    const id = prompt("Ingrese un ID unico para el triangulo: ")
    const side = parseInt(prompt("Largo: "))
    const x = parseInt(prompt("Coordenada X: "))
    const y = parseInt(prompt("Coordenada Y: "))
    const color = this.getColor()
    if (id && !isNaN(side) && !isNaN(x) && !isNaN(y)) {
      this.engine.addShape(new Triangle(id, x, y, side, color))
    } else alert("Datos invalidos")
  }
}

const engine = new FigureEngineRenderer("canvas")
new Controller(engine)
