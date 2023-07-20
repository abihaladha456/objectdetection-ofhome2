img="";
status="";
objects=[];
function preload(){
    img=loadImage("bottle.png");
}
function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd'  , modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Object";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img , gotResults);
}
function gotResults(error , results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}
function draw(){
    image(img , 0 , 0 , 640 , 420);
    fill("#030bfc");
    text("Bottle" , 45 , 75);
    noFill();
    stroke("#030bfc");
    rect(30 , 60 , 450 , 350);
}
