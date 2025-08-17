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

  // Runs the code inside every 1second
  //It returns an ID (intervalId)
  // If we have reached 0seconds, then stop the loop
  intervalId = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
   
    totalSeconds--; //If we are above 0 seconds, substract one second.
    // Convert total seconds into munutes + seconds
    const m = Math.floor(totalSeconds / 60); // full minutes
    const s = totalSeconds % 60; // remainder seconds
    countdownElement.textContent =
      `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, 1000);

  //Pad start ensures the string is at least 2 character longs, padding with 0 if is shorter

  //String(5).padStart(2, "0") // "05"
  // String(12).padStart(2, "0") // "12"
  
  // This way it looks like MM : SS



}
