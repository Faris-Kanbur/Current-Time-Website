var today = new Date();
var day =today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

function myFunction_1() {
    document.getElementById("result_1").innerHTML = day ;
  };

function myFunction_2() {
      if (month==1)
    document.getElementById("result_2").innerHTML = "January";
      if (month==2)
    document.getElementById("result_2").innerHTML = "February";
      if (month==3)
    document.getElementById("result_2").innerHTML = "March";
      if (month==4)
    document.getElementById("result_2").innerHTML = "April";
      if (month==5)
    document.getElementById("result_2").innerHTML = "May";
      if (month==6)
    document.getElementById("result_2").innerHTML = "June ";
      if (month==7)
    document.getElementById("result_2").innerHTML = "July";
      if (month==8)
    document.getElementById("result_2").innerHTML = "August";
      if (month==9)
    document.getElementById("result_2").innerHTML = "September ";
      if (month==10)
    document.getElementById("result_2").innerHTML = "October";
      if (month==11)
    document.getElementById("result_2").innerHTML = "November";
    if (month==12)
    document.getElementById("result_2").innerHTML = "December";

  };

function myFunction_3() {
    document.getElementById("result_3").innerHTML = year ;
  };



function myFunction_time() {

 var h = new Date().getHours();
 var m = new Date().getMinutes();
 var s = new Date().getSeconds();

 document.getElementById("hour").innerHTML = h ;
 document.getElementById("minutes").innerHTML = m ;
 document.getElementById("second").innerHTML = s ;

    
    
  };

  var Interval = setInterval(myFunction_time,1000);

  






