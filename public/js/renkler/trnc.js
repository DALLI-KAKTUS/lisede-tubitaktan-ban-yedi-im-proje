var trncrhi, trncghi, trncbhi;
var trncrlo, trncglo, trncblo;
var trncrage;
var trncBLG;
var trncx,trncy,trncw,trnch,trncc;
var trncdrm;
var trncrenk = [196, 63, 20];
//hassasiyet ayarı

function trncsetTarget(trncr, trncg, trncb, trncrange) {
    trncrange = trncrange || 40; //hassasiyet ayarı
    trncrhi = trncr + trncrange, trncrlo = trncr - trncrange;
    trncghi = trncg + trncrange, trncglo = trncg - trncrange;
    trncbhi = trncb + trncrange, trncblo = trncb - trncrange;
}

function trncfnRAA() { //renk algılama ayarı
    trncsetTarget(trncrenk[0], trncrenk[1], trncrenk[2]); // açılıştaki renk
    tracking.ColorTracker.registerColor('turuncu', function (trncr, trncg, trncb) {
        if (trncr <= trncrhi && trncr >= trncrlo &&
            trncg <= trncghi && trncg >= trncglo &&
            trncb <= trncbhi && trncb >= trncblo) {
            return true;
        }
        return false;
    });

}

function trncfnTA() {
    trnctracker = new tracking.ColorTracker(['turuncu']);
    trnctracker.minDimension = 20; // make this smaller to track smaller objects
    capture.elt.id = 'p5video';
    tracking.track('#p5video', trnctracker, {
        camera: true
    });
}

function trncfnCC() { //çerçeve çiz
    trnctracker.on('track', function (trncevent) {
        trncdrm = 0;
        trncevent.data.forEach(function (trnc) {
            //renkler ve nesneler
            if (trnc.color == 'turuncu') {
                strokeWeight(4);
                stroke(255, 0, 0);
                noFill();
                rect(trnc.x, trnc.y, trnc.width, trnc.height);
                trncBLG = [trnc.x, trnc.y, trnc.width, trnc.height, trnc.color];
                trncx =Number(trnc.x);
                trncy = trnc.y;
                trncw = trnc.width;
                trnch = trnc.height;
                trncbyt=[trncy+trnch,trncx+trncw];
                trncc = trnc.color;
                trncdrm = 1;

            }

        });
    });

}
