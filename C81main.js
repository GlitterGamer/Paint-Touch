var last_posistion_of_x
var last_posistion_of_y
canvas = document.getElementById("my_Canvas")
ctx= canvas.getContext("2d")
color="red"
var widthOfTheLine= 10
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
    color= document.getElementById("color").value
    console.log("touchstart")
    last_posistion_of_x= e.touches[0].clientX-canvas.offsetleft
    last_posistion_of_y= e.touches[0].clientY-canvas.offsetleft
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){
    console.log("touchmove")
    current_posistion_of_x= e.touches[0].clientX-canvas.offsetleft
    current_posistion_of_y=  e.touches[0].clientY-canvas.offsetleft
    ctx.beginPath();
    ctx.strokeStyle= color
    ctx.lineWidth= widthOfTheLine
    ctx.moveTo(last_posistion_of_x, last_posistion_of_y)
    ctx.lineTo(current_posistion_of_x, current_posistion_of_y)
    last_posistion_of_x= current_posistion_of_x
    last_posistion_of_y= current_posistion_of_y

}

