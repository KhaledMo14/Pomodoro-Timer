
var timer= document.getElementById('timer');

var breakk = document.getElementById('break');

var wStart = document.getElementById("wStar-btn")

var bStart = document.getElementById("bStar-btn")

var resu = document.getElementById("resume-btn")

var wHr = 0;
var wMn = 0 ; 
var wSec = 0;
var bHr = 0 ;
var bMn=0;
var bSec=0; 
var workInt ;
var breakInt ;
var resumeInt;

bStart.disabled=true;
resu.disabled=true;


function workStart(){

    workInt = setInterval(workAdd,1000)
    clearInterval(breakInt)
    wStart.disabled=true;
    bStart.disabled=false;
    resu.disabled=false;

}


function workAdd()
{
    wSec ++ ;
    if(wSec>=60)
    {
        wSec=0;
        wMn++;
    }

    if(wMn>=60)
    {
        wMn=0;
        wHr++;
    }

   
    var time =wHr+" : "  +(wMn <10 ? "0"+wMn : wMn )+ " : "+(wSec <10 ? "0"+wSec :wSec) ;
    timer.innerHTML=`<span class="w-text">Work Timer</span>${time} `

    resu.disabled=true;
}



function stopWork ()
{
    
    clearInterval(workInt);
   
}


function breakStart()
{
    breakInt = setInterval(breakAdd,1000);
    clearInterval(workInt);
    clearInterval(resumeInt)
    wStart.disabled=false;
    bStart.disabled=true;
    resu.disabled=false;
}


function breakAdd()
{
    bSec ++ ;
    if(bSec>=60)
    {
        bSec=0;
        bMn++;
    }

    if(bMn>=60)
    {
        bMn=0;
        bHr++;
    }
    var bre =bHr+" : "  +(bMn <10 ? "0"+bMn : bMn )+ " : "+(bSec <10 ? "0"+bSec :bSec);
     breakk.innerHTML=`<span class="b-text">Break Timer</span>${bre} `
}

function stopBreak()
{
    resumeInt=setInterval(workAdd,1000)
    clearInterval(breakInt);
    resu.disabled=true;
    bStart.disabled=false;
     wStart.disabled=true;
    
}


function clearAll()
{

  alert(`you work ${wHr} hours and ${wMn} minutes and ${wSec} seconds
you break ${bHr} hours and ${bMn} minutes and ${bSec} seconds`)

    wHr = 0;
    wMn = 0 ; 
    wSec = 0;
    bHr = 0 ;
    bMn=0;     
    bSec=0; 
    clearInterval(workInt);
    clearInterval(breakInt);
    clearInterval(resumeInt)
    timer.innerHTML=`<span class="w-text">Work Timer</span> <span> 0 : 00 : 00 </span>`;
    breakk.innerHTML= `<span class="b-text">Break Timer</span> <span> 0 : 00 : 00 </span>`;
    resu.disabled=true;
    bStart.disabled=true;
    wStart.disabled=false;
    
}











