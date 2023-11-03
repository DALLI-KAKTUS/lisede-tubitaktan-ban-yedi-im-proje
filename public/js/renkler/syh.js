var syhrhi, syhghi, syhbhi;
var syhrlo, syhglo, syhblo;
var syhrage;
var syhBLG;
var syhx,syhy,syhw,syhh,syhc;
var syhdrm;
var syhrenk=[60, 42, 60];
var syhbyt;

//hassasiyet ayarı

function syhsetTarget(syhr, syhg, syhb, syhrange) {
    syhrange = syhrange || 30; //hassasiyet ayarı
    syhrhi = syhr + syhrange, syhrlo = syhr - syhrange;
    syhghi = syhg + syhrange, syhglo = syhg - syhrange;
    syhbhi = syhb + syhrange, syhblo = syhb - syhrange;
}

function syhfnRAA() { //renk algılama ayarı
    syhsetTarget(syhrenk[0],syhrenk[1],syhrenk[2]); // açılıştaki renk
    tracking.ColorTracker.registerColor('siyah', function (syhr, syhg, syhb) {
        if (syhr <= syhrhi && syhr >= syhrlo &&
            syhg <= syhghi && syhg >= syhglo &&
            syhb <= syhbhi && syhb >= syhblo) {
            return true;
        }
        return false;
    });

}

function syhfnTA() {
    syhtracker = new tracking.ColorTracker(['siyah']);
    syhtracker.minDimension = 25; // make this smaller to track smaller objects
    capture.elt.id = 'p5video';
    tracking.track('#p5video', syhtracker, {
        camera: true
    });
}

function syhfnCC() { //çerçeve çiz
    syhtracker.on('track', function (syhevent) {
        syhdrm=0;
        syhevent.data.forEach(function (syh) {


            //renkler ve nesneler
            if (syh.color == 'siyah') {

                strokeWeight(4);
                stroke(0, 0, 0);
                noFill();
                rect(syh.x, syh.y, syh.width, syh.height);
                syhBLG = [syh.x, syh.y, syh.width, syh.height,syh.color];
                syhx=syh.x;
                syhy=syh.y;
                syhw=syh.width;
                syhh=syh.height;
                syhc=syh.color;
                syhbyt=[syhy+syhh,syhx+syhw];
                syhdrm=1;
 console.log(syh);
            }
        });
    });

}
