document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  let isValid = true;

  emailError.textContent = '';
  passwordError.textContent = '';
  email.classList.remove('invalid');
  password.classList.remove('invalid');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    email.classList.add('invalid');
    isValid = false;
  }

  if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    password.classList.add('invalid');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Placeholder: replace with an actual authentication request.
  console.log('Login submitted:', { email: email.value.trim(), remember: document.getElementById('remember').checked });
});
