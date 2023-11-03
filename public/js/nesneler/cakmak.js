

function cakmak(uzk){

    if(syhdrm ==1 &&trncdrm==1 ){

  if(syhbyt[0]-trncy<=10 && syhbyt[0]-trncy>=-20 ){

    return('çakmak dik algılandı');
  }

if( syhy-trncbyt[0]<=20 && syhy-trncbyt[0]>=-10){
    return('çakmak ters algılandı');
}


  if(Math.abs(syhbyt[1]-trncx)<=20 || Math.abs(syhx-trncbyt[1])<=20){

        return('çakmak yan algılandı');
      }


       }else{
           return(0);
       }
}
