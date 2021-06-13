const minute=document.getElementById('minute');
const seconds=document.getElementById('seconds');
const tens=document.getElementById('tens');
const startbtn=document.querySelector('.button-start')
const stopbtn=document.querySelector('.button-stop')
const resetbtn=document.querySelector('.button-reset')

mesc=0;
sec=0;
min=0;

function timer(){
    mesc ++
    tens.innerHTML=mesc
    if (mesc >= 100) {
        sec ++;
        seconds.innerHTML=sec;
        mesc=0;
    }
    else if(sec >=60) {
        min++;
        sec=0;
        minute.innerHTML=min;
        
    }

    

}
function start(){
    interval=setInterval(timer,10)
    startbtn.disabled=true;
    stopbtn.disabled=True;
}
function stop(){
    clearInterval(interval);
    startbtn.disabled=false;
    stopbtn.disabled=True;
}


startbtn.addEventListener('click',start)

stopbtn.addEventListener('click',stop)

resetbtn.addEventListener('click',()=>{
    mesc=0;
    sec=0;
    min=0;
    tens.innerHTML=mesc;
    seconds.innerHTML=sec;
    minute.innerHTML=min;
    stop();
    startbtn.disabled=false;
    stopbtn.disabled=false
})
