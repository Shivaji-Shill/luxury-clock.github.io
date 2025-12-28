// Upgraded from a basic digital clock example to a luxury clock design
function updateClock() {
  const now = new Date();

  // DIGITAL
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;

  document.getElementById("clock").innerText =
    `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} ${ampm}`;

  document.getElementById("date").innerText =
    now.toDateString();

  // ANALOG
  document.getElementById("hour").style.transform =
    `translateX(-50%) rotate(${h * 30 + m / 2}deg)`;

  document.getElementById("minute").style.transform =
    `translateX(-50%) rotate(${m * 6}deg)`;

  document.getElementById("second").style.transform =
    `translateX(-50%) rotate(${s * 6}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

