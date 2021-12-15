
function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    }

    function modelLoaded(){
        console.log("poseNet is Initialized");

    }

    function draw(){
     image(video,0,0,400,400);
     fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(15, 20, 30, 370,20);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(15, 20, 370, 30,20);

   fill(0, 0, 255);
   stroke(0, 0, 255);
   rect(355, 20, 30, 370,20);

   
   fill(0, 0, 255);
   stroke(0, 0, 255);
   rect(15, 360, 370, 30,20);

fill(255,0,255);
    stroke(255,0,255);
    circle(30,30,50);

    fill(255,69,0);
    stroke(255,69,0);
    circle(30,370,50);

    fill(176, 38, 255);
    stroke(176, 38, 255);
    circle(370,370,50);

    fill(0, 255, 255);
    stroke(0, 255, 255);
    circle(370,30,50);

    
    }

    function take_snapshot(){
        save("cuteframe.jpeg");

    }
