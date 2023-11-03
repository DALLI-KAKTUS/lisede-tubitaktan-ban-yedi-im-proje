function removeFromArray(arr,elt){
 for(var i= arr.length-1 ; i>=0 ; i--){
  if(arr[i] == elt){
   arr.splice(i,1);
  }
 }
}
/*
*Astar için değişkenler.
*/
var street;
var cols = 5;
var rows = 5;
let socket = io.connect('http://192.168.1.36:5000');
var grid = new Array(cols);
var hedef;
var openSet = [];
var closedSet = [];
var start;
var end;
var w,h;
var path=[];
var pathc=[];

/*
*YOLO için değişkenler
*/
var yolo;

function setup() {
    
    yoloHzr();
    createCanvas(400, 400);
    background(0); 
     w=width / cols;
     h=(height) / rows;
     createGrid(); 
     street=[
        1,1,0,1,1,
        0,0,0,1,1,
        1,1,0,1,1,
        1,1,0,0,0,
        1,1,0,1,1
        ]
     showStreet();

    start = grid[2][4];
    start.wall= 0;
    socket.on('hdf', (data) => {
        hedef=data;
        end=eval('grid'+hedef);

  if(path.length>0){
    console.log(path);
    let l= 0;
    for (let k =  path.length-1; k >= 0; k--) {
      
      pathc[l]=[path[k].i,path[k].j];
      l++;
    }
    socket.emit('yol',pathc);
    console.log(pathc);
  }
        
        closedSet= [];
        openSet=[];
        openSet.push(start);
        astar();
        
       });

}
let yoloRes;
function draw() {
  yolo.detect(function(err, results){
      console.log(results);
    //  socket.emit('yolo',results);
   });
   //results içinde insan var ise yavaşla
   //               araba var ise dur
   //               araba veya insan yok ise yürü 
  }


