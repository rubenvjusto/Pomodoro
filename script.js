// DOM selection
const countdownElement = document.querySelector(".countdown");
const btn = document.querySelector(".start-timer");

// When a user clicks the button, we start the startTimer function
btn.addEventListener("click", startTimer);

function startTimer() {

  // Parse current text (e.g., "20:00")
  const [minutes, seconds] = countdownElement.textContent.split(":").map(Number);
  // We get the text inside the countdown element
  // We splut the string into an array ["20", "00"]
  // Each string is a Number

  let totalSeconds = (minutes * 60) + seconds;
  // (20*60) = total of seconds of 20 minutes
  // number of seconds

  intervalId = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }

    totalSeconds--;
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    countdownElement.textContent =
      `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, 1000);
}
