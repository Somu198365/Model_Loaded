Webcam.set(
{
  height:300,
  width:310,
  image_format:'png',
  dest_width:300,
   png_quality:90,
   constraints:{
       facingMode:"environment"
   }
});

camera= document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot()
{
  Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML="<img id='snap' src="+data_uri+">"
  });
}

console.log("ml5_verson",ml5.version)

classifire=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
  console.log("Model loaded!")
}

function check()
{
snap=document.getElementById("snap");
classifire.classify(snap,gotResult);
}

function gotResult(error , results)
{
if(error){
  console.error("error")
}
  else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
  }
  
}
