const canvas = document.getElementById("game")
const hel_posx = document.getElementById("hel-x")
const hel_posy = document.getElementById("hel-y")
const ctx = canvas.getContext("2d")

const helicoptero = {
  x: 350,
  y: 250,
  width: 200,
  height: 180,
  speed: 5,
  image: new Image(),
}

helicoptero.image.src = "helicoptero.png"

const balas = []
const balasSpeed = 8
const balaImage = new Image()
balaImage.src = "bala.png"

const shoot = () => {
  balas.push({
    x: helicoptero.x + helicoptero.width,
    y: helicoptero.y + helicoptero.height / 2 - 4, //centrado vertical (altura: 8px)
    width: 16,
    height: 8,
  })
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //Dibujar helicptero
  ctx.drawImage(
    helicoptero.image,
    helicoptero.x,
    helicoptero.y,
    helicoptero.width,
    helicoptero.height
  )

  //Dibujar balas
  balas.forEach((bala) => {
    ctx.drawImage(balaImage, bala.x, bala.y, bala.width, bala.height)
  })
}

const keys = {}

addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true
  if (e.key === " ") shoot()
})
addEventListener("keyup", (e) => (keys[e.key.toLowerCase()] = false))

const update = () => {
  if (keys["arrowup"] || keys["w"]) helicoptero.y -= helicoptero.speed
  if (keys["arrowdown"] || keys["s"]) helicoptero.y += helicoptero.speed
  if (keys["arrowleft"] || keys["a"]) helicoptero.x -= helicoptero.speed
  if (keys["arrowright"] || keys["d"]) helicoptero.x += helicoptero.speed

  helicoptero.x = Math.max(0, Math.min(canvas.width - helicoptero.width, helicoptero.x))
  helicoptero.y = Math.max(0, Math.min(canvas.height - helicoptero.height, helicoptero.y))

  for (let i = balas.length - 1; i >= 0; i--) {
    balas[i].x += balasSpeed

    if (balas[i].x > canvas.width) balas.splice(i, 1)
  }

  hel_posx.innerHTML = "x: " + helicoptero.x
  hel_posy.innerHTML = "y: " + helicoptero.y
}

const loop = () => {
  update()
  draw()
  requestAnimationFrame(loop)
}

helicoptero.image.onload = () => {
  loop()
}
