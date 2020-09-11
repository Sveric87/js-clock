const s = document.getElementById("s");
const m = document.getElementById("m");
const h = document.getElementById("h");
const d = document.getElementById("d");

setInterval(() => { 
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hrs = date.getHours();

    s.style.transform = `rotateZ(${sec*6}deg)`;
    m.style.transform = `rotateZ(${min*6}deg)`;    
    h.style.transform = `rotateZ(${hrs*30}deg)`;

    const digSec = sec > 9 ? sec : "0"+sec;
    const digMin = min > 9 ? min : "0"+min;
    const digHrs = hrs > 9 ? hrs : "0"+hrs;


    if(document.getElementById("switch").checked == true){
        ampm = true;
    } else {
        ampm = false;
    }

    if(ampm == true){
        let hrs12;
        let dayTime;
        if(hrs > 12){
            hrs12 = "0"+(hrs - 12);
            dayTime = "PM";
        }
        else if(hrs < 12){
            hrs12 = "0"+hrs;
            dayTime = "AM"
        } 
        else if(hrs == 0){
            hrs12 = "12";
            dayTime = "AM";
        }
        else if(hrs == 12){
            hrs12 = hrs;
            dayTime = "PM"
        }
        d.innerHTML = hrs12+":"+digMin+":"+digSec+" "+dayTime;
    } else {
        d.innerHTML = digHrs+":"+digMin+":"+digSec;
    }
}, 1000);