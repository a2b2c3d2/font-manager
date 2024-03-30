function setup(){
    Video=createCapture(VIDEO);
    Video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(550,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#969A97');
}
function modelLoaded(){
    console.log('posenet Is Intialized');
}
function gotPoses(results){
    if(results.length>0){console.log(results)}
}