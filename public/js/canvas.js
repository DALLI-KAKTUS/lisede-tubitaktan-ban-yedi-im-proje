var w = 858,
    h = 480;
function canvasCreate(){
capture = createCapture({ //video canvası oluştur
    audio: false, //sesi kapat
    video: {
        width: w,
        height: h
    }
}, function () {
    console.log('capture ready.')
});
capture.elt.setAttribute('playsinline', '');
capture.size(w, h);
capture.parent('container');
cnv = createCanvas(1920, 1080);
cnv.parent('container');
}
