let socket = io.connect('http://192.168.1.36:5000');
function reset() {

 gidilecek = document.getElementById("gidilecek").value; 
 socket.emit('hedef',gidilecek)
console.log(gidilecek);

}