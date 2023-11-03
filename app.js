//DALLI KAKTUS
const express =require('express');
const bodyParser =require('body-parser');
const path = require('path');
const fs = require('fs');
const expressJade = require('express-jade');
const jade = require('jade');
const app=express();
const PORT = process.env.PORT || 'http://192.168.1.36:5000';
var server = app.listen(5000,'192.168.1.36',() => console.log(`server ${ PORT } portunda çalışıyor`));
const socket =require('socket.io');
var io= socket(server);
/*const SerialPort = require('serialport')
const port = new SerialPort('COM3', {
  baudRate: 115200
})*/
var pathc;
//görüntü motoru
app.set('view engine','jade');
//görüntü
app.use('/public',express.static(path.join(__dirname,'public')));
//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
io.sockets.on('connection',newConnection);
function newConnection(socket){
  console.log('yeni bağlantı '+socket.id); 
  //gidilecek yerin bilgisi alındı
  socket.on('hedef', (hedef)=>{
    io.sockets.emit('hdf',hedef)
   console.log('hedef: ' + hedef);
    });

    socket.on('yol', (yol)=>{
    pathc=yol;
   // console.log('yol: ' + pathc);
    let pathgy;
    let pathgx;
    for (let k = 0; k <pathc.length; k++) {
      let pathx=pathc[k][0];
      let pathy=pathc[k][1];
      if(k+1 <pathc.length){
      pathgx=pathc[k+1][0];
      pathgy=pathc[k+1][1];
      }else{
        pathgx=pathx;
        pathgy=pathy;
      }
      if(pathy>pathgy){
       console.log('kuzeye git');
       //serial.write('k');
      }
      if(pathy<pathgy){
        console.log('güneye git');
       // serial.write('g');
      }
      if(pathx>pathgx){
      console.log('batıya git');
     // serial.write('b');
      }
      if(pathx<pathgx){
        console.log('doğuya git');
      //  serial.write('d');
        }
       
    }
    });
  }
  
  

  app.get('/lattepanda' ,(req,res)=>{res.render('lattepanda',)});
   app.get('/client' ,(req,res)=>{res.render('client',)});
