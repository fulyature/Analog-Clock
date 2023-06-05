const display = document.querySelector(".clockDisplay");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    session = "PM";
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  console.log(hour + ":" + minute + ":" + second + ":" + session);

  display.innerHTML = hour + ":" + minute + ":" + second + "." + session;
}

setInterval(showTime, 1000);
