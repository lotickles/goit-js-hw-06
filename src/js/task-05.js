const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', event => {
  const newName = event.currentTarget.value;
  nameOutput.textContent = newName === '' ? 'Anonymous' : newName;
});
