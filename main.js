img="";
status="";
function draw()
{
image(img, 0,0,600, 450);
fill("red");
text("Dog", 60,70);
noFill();
stroke("red");
rect(30,30, 280,400);
fill("red");
text("Cat", 350, 70);
noFill();
rect(340, 30, 400, 400);
}

function preload()
{
    img = loadImage("dog_cat.jpg");

}

function setup()
{
    canvas = createCanvas(600, 450);
    canvas.position(325, 125);
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status").innerHTML = "Status: Detecting Object";

    
    
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetection.detect(img, gotResult);

}


function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}