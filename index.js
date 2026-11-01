const endDate = new Date("30 nov, 2026 19:58:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer(){
   const now = new Date().getTime();

   const distanceCovered = now-startDate;
   const distancePending = endDate-now;
   const oneDayInnMillis = (24 * 60 * 60 * 1000);
   const days = Math.floor(distancePending/(oneDayInnMillis));
   const hours = Math.floor((distancePending%(oneDayInnMillis) / (60 * 60 * 1000)));
   const minutes = Math.floor((distancePending%(60 * 60* 1000)) /(60*1000));
   const seconds = Math.floor((distancePending%(60*1000))/(1000));

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   const totalDistance = endDate - startDate;

   const percetageDistance = (distanceCovered/totalDistance)*100


   document.getElementById(progrees-bar).style.width = percetageDistance +"%";

   if(distancePending < 0){
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width ="100%";
   }

}
, 1000);
