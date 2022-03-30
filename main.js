    NoseX = 0;
    NoseY = 0;

function preload(){
    cloud_Nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    //circle(NoseX, NoseY, 25);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    image(cloud_Nose, NoseX-15, NoseY-10, 30, 30);
}

function take_snapshot(){
    save("myFilterImage.png");
}

function modelLoaded(){
    console.log("poseNet is Initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose x ="+ NoseX);
        console.log("nose y ="+ NoseY);
    }
}




