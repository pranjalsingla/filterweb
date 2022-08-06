leftEar_X=0;
leftEar_Y=0;
rightEar_x=0;
rightEar_y=0;
function preload(){
   earring = loadImage('https://i.postimg.cc/YCs6BzV5/Lovepik-com-401703983-earring.png')
}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("POSENET IS INITIALIZED");
}

function draw(){
    image(video,0,0,300,300);
    image(earring,leftEar_X,leftEar_Y,80,80);
    image(earring,rightEar_x,rightEar_y,80,80);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftEar_X=results[0].pose.leftEar.x-40;
        leftEar_Y=results[0].pose.leftEar.y+15;
        rightEar_x=results[0].pose.rightEar.x-40;
        rightEar_y=results[0].pose.rightEar.y+15;
        console.log("left ear x = "+leftEar_X);
        console.log("left ear y = "+leftEar_Y);
        console.log("right ear x = "+rightEar_x);
        console.log("right ear y = "+rightEar_y);
    }
}

function take_snapshot(){
    save('my_filter_image.png')
}