// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]')
}

document.body.style.background = '#293133';
document.body.style.color = "#ffffff";

const INTERVAL = 1000;
refs.start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  isActive: null,
  deltaTime: null,
  defaultDate: new Date(),
  selectedTime: null,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (this.isActive) {
      return;
    }
    console.log(selectedDates[0]);
    this.selectedTime = this.selectedDates[0].getTime();
    if (this.selectedTime > Date.now()) {
      this.isActive = true;
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = this.selectedTime - currentTime;
        if (this.deltaTime > 0) {
          const timeWatch = convertMs(this.deltaTime);
          updateClockFace(timeWatch);
          return;
        }
        clearInterval(this.intevalId);
        console.log('Lets begin!');
        this.isActive = false;
      }, INTERVAL);
      return;
    }
  },
  onChange(selectedDates, dateStr, instance) {
    this.selectedTime = selectedDates[0].getTime();
    if (this.selectedTime > Date.now()) {
      refs.start.disabled = false;
      return;
    }
    refs.start.disabled = true;
    Notiflix.Notify.failure('Please choose a date in the future!');
  }
};



flatpickr(refs.input, options);

function updateClockFace({ days, hours, minutes, seconds }) {
  //   refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
