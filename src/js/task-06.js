const input = document.getElementById('validation-input');

input.addEventListener('blur', function () {
  const expectedLength = parseInt(input.getAttribute('data-length'));
  const inputLength = input.value.length;

  if (inputLength === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
