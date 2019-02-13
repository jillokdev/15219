// Original code: https://www.w3schools.com/howto/howto_js_countdown.asp

var countDownDate = new Date("Feb 15, 2019 20:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.querySelector("h1").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("h1").innerHTML = "Think outside the box - this summer";
  }
}, 1000);