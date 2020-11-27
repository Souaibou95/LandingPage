function showtime(){
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var mid = "AM";
  if (h == 0){
    h = 12;
  }
  if (h > 12){
    h = h - 12;
    mid = "PM";
  }

  h = (h < 10) ? "0" + h: h;
  m = (m < 10) ? "0" + m: m;
  s = (s < 10) ? "0" + s: s;

  var currentTime = h + ":" + m + ":" + s +" "+ mid;
  document.getElementById("clock").innerHTML = currentTime;

  setTimeout(showtime, 1000)

}
showtime();
//document.getElementById("t").innerHTML = Time();
