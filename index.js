let hrs=document.getElementById("hours");
let min=document.getElementById("min");

let sec=document.getElementById("sec");
setInterval(()=>{let currentTime=new Date();
    hours.innerHTML=(currentTime.getHours()<10?"0":" ")+currentTime.getHours();
    min.innerHTML=currentTime.getMinutes();
    
    sec.innerHTML=currentTime.getSeconds();},1000)


