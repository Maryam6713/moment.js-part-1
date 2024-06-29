var arr = ["maryam" , "fatima" , "ayesha"]
var returnValue = arr.pop()
console.log(arr);
console.log(returnValue);

var now = new Date()

var currentDay = now.getDay()
console.log(now);
console.log(currentDay);

var num = Math.floor(2.60)
console.log(num);

var num = Math.ceil(2.20)
console.log(num);
var num = Math.random(10)*6 + 1;
console.log(num);

var currentYear = now.getFullYear()
console.log(currentYear);

var currentDate = now.getDate()
console.log(currentDate);
var currentMonth = now.getMonth()
console.log(currentMonth);



console.log(currentDate,  currentMonth , currentYear);


//-----------Moment js----//
//----------Format Dates-----//

var myDate = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(myDate); //June 29th 2024, 1:40:45 pm

var myDate = moment().format('dddd');  
console.log(myDate);//Saturday

var myDate =moment().format('YYYY [escaped] YYYY');
console.log(myDate);//2024 escaped 2024

var myDate =moment().format(); 
console.log(myDate); //2024-06-29T13:40:45+05:00

//----------Relative Time---------//

var myDate =moment("20180128", "YYYYMMDD").fromNow();
console.log(myDate);//6 years ago

var myDate = moment("20030726", "YYYYMMDD").fromNow();;
console.log(myDate); //21 years ago

var myDate =moment().startOf('day').fromNow();
console.log(myDate); //14 hours ago

var myDate =moment().endOf('day').fromNow();
console.log(myDate);//in 10 hours

var myDate = moment().startOf('hour').fromNow();
console.log(myDate);//an hour ago



