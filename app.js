var hr=document.getElementById('hr')
var min=document.getElementById('min')
var sec=document.getElementById('sec')
var msec=document.getElementById('msec')

var  jshr=0
var jsmin=0
var jssec=0
var jsmsec=0
var interval1;
function started(){
var interval1=setInterval(function(){
jsmsec++
msec.innerHTML=jsmsec;
if(jsmsec>=100){
    jssec++
    sec.innerHTML=jssec
    jsmsec=0
}
else if(jssec==10){
    jsmin++
    min.innerHTML=jsmin
    jssec=0
}
else if(jsmin==2 ){
    jshr++
    hr.innerHTML=jshr
    jsmin=0
}
},10)
document.getElementById('start').disabled=true

}
function stoped(){
    clearInterval(interval1)
// document.getElementById('start').disabled=false

}
function reseted(){
    clearInterval(interval1)
    jshr=0
    jsmin=0
    jsmsec=0
    jssec=0
    msec.innerHTML = jsmsec
    min.innerHTML = jsmin
    sec.innerHTML = jssec
    hr.innerHTML=jshr

}