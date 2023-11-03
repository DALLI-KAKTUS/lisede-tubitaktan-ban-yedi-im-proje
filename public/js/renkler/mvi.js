var mvirhi, mvighi, mvibhi;
var mvirlo, mviglo, mviblo;
var mvirage;
var mviBLG;
var mvidrm;
var mvirenk=[23, 42, 198];
//hassasiyet ayarı

function mvisetTarget(mvir, mvig, mvib, mvirange) {
    mvirange = mvirange || 40; //hassasiyet ayarı
    mvirhi = mvir + mvirange, mvirlo = mvir - mvirange;
    mvighi = mvig + mvirange, mviglo = mvig - mvirange;
    mvibhi = mvib + mvirange, mviblo = mvib - mvirange;
}

function mvifnRAA() { //renk algılama ayarı
    mvisetTarget(mvirenk[0],mvirenk[1],mvirenk[2]); // açılıştaki renk
    tracking.ColorTracker.registerColor('mavi', function (mvir, mvig, mvib) {
        if (mvir <= mvirhi && mvir >= mvirlo &&
            mvig <= mvighi && mvig >= mviglo &&
            mvib <= mvibhi && mvib >= mviblo) {
            return true;
        }
        return false;
    });

}

function mvifnTA() {
    mvitracker = new tracking.ColorTracker(['mavi']);
    mvitracker.minDimension = 20; // make this smaller to track smaller objects
    capture.elt.id = 'p5video';
    tracking.track('#p5video', mvitracker, {
        camera: true
    });
}

function mvifnCC() { //çerçeve çiz
    mvitracker.on('track', function (mvievent) {
        mvidrm=0;
        clear()
        mvievent.data.forEach(function (mvi) {
            //renkler ve nesneler
            if (mvi.color == 'mavi') {
                strokeWeight(4);
                stroke(0, 0, 255);
                noFill();
                rect(mvi.x, mvi.y, mvi.width, mvi.height);
                mviBLG = [mvi.x, mvi.y, mvi.width, mvi.height,mvi.color];
                mvix=mvi.x;
                mviy=mvi.y;
                mviw=mvi.width;
                mvih=mvi.height;
                trncbyt=[trncy+trnch,trncx+trncw];
                mvic=mvi.color;
                mvidrm=1;
            }

        });
    });

}
