

function yoloHzr(){
   video=document.getElementById('video');
   yolo = ml5.YOLO(video, modelLoaded);
  function modelLoaded() {
    console.log('yolo hazır');
  }
}