let counterValue = 0;
const value = document.getElementById('value');
value.innerText = counterValue;

const incBtn = document.querySelector('[data-action = increment');
const decBtn = document.querySelector('[data-action = decrement');

incBtn.addEventListener('click', () => {
  counterValue += 1;
  value.innerText = counterValue;
});

decBtn.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue -= 1;
    value.innerText = counterValue;
  }
});
