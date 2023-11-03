function heuristic(a,b){
    var d = abs(a.i-b.i) + abs(a.j-b.j);
    //var d= dist(a.i,a.j,b.i,b.j);
    return d;
}

function Spot(i,j) {
    this.i=i;
    this.j=j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors=[]; 
    this.previous = undefined;
    this.wall= 0;
    //if(random(1)<0.3) this.wall=1;
    this.show = function(col) {
         fill(col);
         if(this.wall) fill(0);
         noStroke();
         rect(this.i*w,this.j*h,w-1,h-1)
     }
   this.addNeighbors = function (grid){
         var i =this.i;
         var j =this.j;
         if(i<cols-1)this.neighbors.push(grid[i+1][j]);
         if(i>0)this.neighbors.push(grid[i-1][j]);
         if(j<rows-1)this.neighbors.push(grid[i][j+1]);
         if(j>0)this.neighbors.push(grid[i][j-1]);
        /*
         if(i>0 && j>0)this.neighbors.push(grid[i-1][j-1]);
         if(i<cols-1 && j>0)this.neighbors.push(grid[i+1][j-1]); 
         if(i>0 && j<rows-1)this.neighbors.push(grid[i-1][j+1]); 
         if(i<cols-1 && j<rows-1)this.neighbors.push(grid[i+1][j+1]); 
        */
     }
}

function astar(){
    while(openSet.length > 0) {
     
        var winner =0;
        for (var i = 0; i < openSet.length; i++) {
         if(openSet[i].f < openSet[winner].f){
          winner =i;
         }    
        }  
        var current = openSet[winner];
        if(current === end){
         console.log("HESAPLANDI");
         break;
        }
   
        removeFromArray(openSet,current);
        closedSet.push(current);
   
        var neighbors=current.neighbors;
        for(var i=0;i<neighbors.length;i++){
          var neighbor=neighbors[i];
   
          if(!closedSet.includes(neighbor) && !neighbor.wall){
             var tempG = current.g + 1;
   
             var newPath= 0;
             if(openSet.includes(neighbor)){
                 if(tempG < neighbor.g){
                     neighbor.g = tempG;
                     newPath=1;
                 }
             }else{
                 neighbor.g = tempG;
                 newPath=1;
                 openSet.push(neighbor);
             }
             if(newPath){
             neighbor.h = heuristic(neighbor,end);
             neighbor.f = neighbor.g + neighbor.h;
             neighbor.previous = current;
           }
          }
        }
       }
       
       
       for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          grid[i][j].show(color(255)); 
        }
       }
       for (let i = 0; i < closedSet.length ; i++) {
          closedSet[i].show(color(255,0,0));
          }
       for (let i = 0; i < openSet.length ; i++) {
          openSet[i].show(color(0,255,0));
       }
       path=[];
       var temp=current;
       path.push(temp);
       while (temp.previous) {
           path.push(temp.previous);
           temp=temp.previous;
       }
       for (let i = 0; i < path.length; i++) {
           path[i].show(color(0,0,255));
           
       }
}

function createGrid(){
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i,j);

        }
    }
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].addNeighbors(grid);

        }
    } 
}

function showStreet() {

    
        let yatayDuvar=0;
        let dikeyDuvar=0;
        for (let x = 0; x < street.length; x++) {
          
         if(yatayDuvar==5){
           dikeyDuvar++;
           yatayDuvar=0;
         }   
    
         if(street[x]){
           grid[yatayDuvar][dikeyDuvar].wall=1;
          }
          yatayDuvar++;
        }
}