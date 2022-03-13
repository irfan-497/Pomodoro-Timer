let seconds = 60;
let minutes = 24;
let displaySecs = 0;
let displayMins = 0;
let Interval;
let btn = document.getElementById("dis");
let btn1 = document.getElementById("dis1");
let btn2 = document.getElementById("dis2");
const taskName = document.querySelector(".taskname");
// for input field
taskName.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.target.value.trim() != "") {
		btn.disabled = false;
		btn1.disabled = false;
		btn2.disabled = false;
		btn.classList.add("startfc");
		btn1.classList.add("pausefc");
		btn2.classList.add("stopfc");
	} else {
		btn.disabled = true;
		btn1.disabled = true;
		btn2.disabled = true;
		btn.classList.add("startdef");
		btn1.classList.add("pausedef");
		btn2.classList.add("stopdef");
	}
});

// for reset button to reset input field
const clear = document.querySelector(".reset");
clear.addEventListener("click", (e) => {
	e.preventDefault;
	document.getElementById("myInput").value = "";
	btn.disabled = true;
	btn1.disabled = true;
	btn2.disabled = true;
	btn.classList.remove("startfc");
	btn1.classList.remove("pausefc");
	btn2.classList.remove("stopfc");
});

// pomodoro time function
function pomodoro() {
	seconds--;
	if (seconds == 00) {
		seconds = 59;
		minutes--;
	}
	if (seconds < 10) {
		displaySecs = `0${seconds.toString()}`;
	} else {
		displaySecs = seconds;
	}
	if (minutes < 10) {
		displayMins = `0${minutes.toString()}`;
	} else {
		displayMins = minutes;
	}
	document.getElementById("displayTime").innerHTML = `${displayMins}:${displaySecs}`;
}

// for start button
const start = document.querySelector(".start");
start.addEventListener("click", (e) => {
	Interval = setInterval(pomodoro, 1000);
});



// for pause button
const pause = document.querySelector(".pause");
pause.addEventListener("click", (e) => {
	clearInterval(Interval);
});

// for stop button and displaying completed tasks when stop button is clicked
const stop = document.querySelector(".stop");
stop.addEventListener("click", (e) => {
	clearInterval(Interval);
	document.getElementById("displayTime").innerHTML = "00:00";
	seconds = 60;
	minutes = 24;
	const tasks = document.querySelector(".completedList > ol");
	tasks.innerHTML += `<strong><li>${taskName.value} is completed in ${displayMins} mins and ${displaySecs} secs</li></strong>`;
});

// for displaying tasks when timer is completed
const tasks = document.querySelector(".completedList > ol");
if (displayMins == 01 && displaySecs == 00) {
	tasks.innerHTML += `<strong><li>${taskName.value} is completed in ${displayMins} mins and ${displaySecs} secs</li></strong>`;
}