function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image (video,0,0,300,300)
    fill("green")
    stroke("green")
    noFill()
    rect(25,25,250,250)
    fill("red")
    stroke("red")
    circle(25,25,20)
    circle(25,275,20)
    circle(275,25,20)
    circle(275,275,20)
}