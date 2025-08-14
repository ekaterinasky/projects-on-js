let initialTime = 30;
let timeLeft = initialTime;
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
let interval;
let alarm = document.querySelector('#alarm');

let timerDisplay = document.querySelector('.timer');
let minutesInput = document.querySelector('#minutes');
let secondsInput = document.querySelector('#seconds');
let setButton = document.querySelector('#set-time');
let isRunning = false;

updateDisplay();

function updateDisplay() {
	let minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;
	timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
	if(isRunning) return;

	isRunning = true;
	interval = setInterval(() => {
		if (timeLeft > 0) {
			timeLeft--;
			updateDisplay();
		} else {
			clearInterval(interval);
			document.body.style.backgroundColor = '#b303';
			alarm.play();
		}
	}, 1000)
}

function pauseTimer() {
	if(isRunning) {
		clearInterval(interval);
		isRunning = false;
	} else {
		startTimer();
	}
}

function resetTimer() {
	clearInterval(interval);
	timeLeft = initialTime;
	updateDisplay();
	document.body.style.backgroundColor = '#222';
}

function setTimer() {
	let minutes = +minutesInput.value || 0;
	let seconds = +secondsInput.value || 0;
	initialTime =(minutes * 60) + seconds;
	timeLeft = initialTime;
	updateDisplay();
}


startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
setButton.addEventListener('click', setTimer)
