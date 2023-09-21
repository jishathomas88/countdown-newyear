const dayEl=document.getElementById("day")
const hourEl=document.getElementById("hour")
const secondEl=document.getElementById("seconds")
const minuteEl=document.getElementById("minutes")

const newyearDate=new Date("Jan 1, 2024 00:00:00").getTime()

 const second=1000
 const minute=second*60;
 const hour=minute*60;
 const day=hour*24;

updateDateCounter()
//calculate days,hour,minute,seconds to new year
function updateDateCounter(){
    const now=new Date().getTime()    
    const gap=newyearDate-now;
    const d=Math.floor(gap/day);
    const h=Math.floor((gap % day)/hour);
    const m=Math.floor((gap % hour)/minute);
    const s=Math.floor((gap%minute)/second )
    
     dayEl.innerText=d;
     hourEl.innerText=h;
     minuteEl.innerText=m;
     secondEl.innerText=s;
     setTimeout(updateDateCounter,1000)

}
