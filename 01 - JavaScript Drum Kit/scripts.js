const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);

keys.forEach((key) => {
	key.addEventListener("transitionend", removeTransition);
});

// Functions

function removeTransition(event) {
	if (event.propertyName !== "transform") return; // skip if not a transform
	this.classList.remove("playing");
}
function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.code}"]`);
	const key = document.querySelector(`.key[data-key="${event.code}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
	// console.log(key);
}
