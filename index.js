const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d') //ctx = context

canvas.width = 1900
canvas.height = 860
ctx.fillStyle = 'white'
ctx.fillRect(0,0, canvas.width, canvas.height)

const img = new Image()
const plane = new Image()
img.src = 'img/mapa.png'
plane.src = 'img/planeUp.jpg' 

img.onload=()=>{
    ctx.drawImage(img, 0, 0)
    ctx.drawImage(plane, 0, 0)
}
