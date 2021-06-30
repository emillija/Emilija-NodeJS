const date = require('date-and-time');
const color = require('colors');

const now = new Date();



const compile = date.compile('h:m:s A D MMM YYYY');
const time = date.format(new Date(), compile);
console.log(time.bgBrightMagenta);




let time2 = date.format(now, 'hh:mm:ss A');
console.log(`The time is: ${time2}`.bgBrightMagenta);




const toString = date.compile('ddd, DD MMM YYYY');
console.log(`Today is: ${date.format(now, toString)}`.bgBrightMagenta);




const toDate = date.parse('2021/06/21 14:06:05', 'YYYY/MM/DD HH:mm:ss');
console.log(JSON.stringify(toDate));    
//Z - UTC (Coordinated Universal Time) go sledi univerzalnoto vreme, sinhronizira saati na kompjuteri preku internet 


const years = JSON.stringify(date.addYears(now, -2));
console.log(`Years: ${years}`);


const months = JSON.stringify(date.addMonths(now, 2));
console.log(`Months: ${months}`.bgBrightMagenta);


const days = JSON.stringify(date.addDays(now, -1));
console.log(`Days: ${days}`);



const hours = JSON.stringify(date.addHours(now, 2));
console.log(`Hours: ${hours}`.bgBrightMagenta);



const minutes = JSON.stringify(date.addMinutes(now, 2));
console.log(`Minutes: ${minutes}`);




const leapYear = date.isLeapYear(2020);
console.log(`${leapYear} - the year 2020 is a leap year`.bgBrightMagenta);

const leapYear2 = date.isLeapYear(2021);
console.log(`${leapYear2} - the year 2021 is not a leap year`.bgBrightMagenta);







