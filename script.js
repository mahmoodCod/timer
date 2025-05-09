const targetDate = new Date("2025-06-01T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").textContent = d.toString().padStart(2, '0');
  document.getElementById("hours").textContent = h.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = m.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = s.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();