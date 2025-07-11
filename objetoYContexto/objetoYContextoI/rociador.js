class Rociador {
  constructor(color = "azul", capacidad = 500) {
    this.color = color;
    this.capacidad = capacidad;
    this.nivelAgua = capacidad;
    this.estaRociando = false;
    this.intensidad = "medio";
  }

  rociar() {
    if (this.nivelAgua > 0) {
      this.estaRociando = true;
      const consumo = this.intensidad === "leve" ? 10 : this.intensidad === "medio" ? 25 : 50;
      this.nivelAgua = Math.max(0, this.nivelAgua - consumo);
      this.actualizarUI();
    } else {
      alert("¡El rociador está vacío!");
    }
  }

  llenar() {
    this.nivelAgua = this.capacidad;
    this.actualizarUI();
  }

  vaciar() {
    this.nivelAgua = 0;
    this.actualizarUI();
  }

  cambiarIntensidad(nuevaIntensidad) {
    this.intensidad = nuevaIntensidad;
    this.actualizarUI();
  }

  actualizarUI() {
    document.getElementById("agua").style.height = `${(this.nivelAgua / this.capacidad) * 100}%`;
    document.getElementById("nivel").textContent = `${this.nivelAgua} ml`;
  }
}

const rociador = new Rociador();
