const loginForm = document.querySelector('form.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All fields must be answered');
    return;
  }
  const dataIntoObject = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(dataIntoObject);
  loginForm.reset();
}
