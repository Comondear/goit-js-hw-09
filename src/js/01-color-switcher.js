const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]')
}

let timerId = null;
const interval = 1000;

const getColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener("click", onStart);
refs.stop.addEventListener('click', onStop);


function onStart() {
  refs.start.disabled = true;
  timerId = setInterval(() => {
    document.body.style.background = getColor()}, interval);
}

function onStop() {
  clearInterval(timerId);
  refs.start.disabled = false;
}