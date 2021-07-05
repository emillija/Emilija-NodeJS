
function timeConversion(time) {

   let dayNight = time[time.length-2] + time[time.length-1]; //AM or PM
   let sliceTime = time.slice(0, time.length-2); //gi brise poslednite dva stringa
   let timeSplit = sliceTime.split(':');
   let hourUpdate = 0; 

   if (dayNight === "PM" && parseInt( timeSplit[0] ) < 12) {
       hourUpdate = parseInt( timeSplit[0] ) + 12; //gi parsirame vo broevi za da dodademe 12
       timeSplit.shift(); //go brise prethodniot [0]
       timeSplit.unshift( hourUpdate.toString() ); //dodava [0]
   } 
   else if (dayNight === "AM" && parseInt( timeSplit[0] ) === 12) {
       hourUpdate = "00";
       timeSplit.shift();
       timeSplit.unshift(hourUpdate);
   } 
   return timeSplit.join(":"); // join e mirror opposite of split, kje gi spoi 3te stringa so : megju niv
};

console.log(timeConversion('12:05:27AM')); 
console.log(timeConversion('02:05:27PM')); 



//https://www.hackerrank.com/challenges/time-conversion/problem
