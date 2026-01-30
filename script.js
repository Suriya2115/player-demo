let startTime = Date.now();
let timer = document.getElementById("time");
let submitBtn = document.getElementById("submitBtn");
let statusText = document.getElementById("status");

let interval = setInterval(() => {
  let seconds = Math.floor((Date.now() - startTime) / 1000);
  timer.innerText = seconds;
}, 1000);

submitBtn.onclick = () => {
  let teamName = document.getElementById("teamName").value;
  let answer = document.getElementById("answer").value;

  if (!teamName || !answer) {
    statusText.innerText = "Please fill all fields";
    return;
  }

  let timeTaken = Math.floor((Date.now() - startTime) / 1000);

  // Scoring (hidden)
  let score = 0;
  if (timeTaken <= 10) score = 100;
  else if (timeTaken <= 20) score = 80;
  else if (timeTaken <= 30) score = 60;

  localStorage.setItem("playerData", JSON.stringify({
    teamName,
    answer,
    timeTaken,
    score
  }));

  clearInterval(interval);

  statusText.innerText = "Answer submitted successfully!";
  submitBtn.disabled = true;
};
