document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const eyeIcon = document.getElementById('eye-icon');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const alertBox = document.getElementById('alert-box');
  const submitBtn = document.getElementById('submit-btn');

  // Password visibility toggle
  let isPasswordVisible = false;
  togglePasswordBtn.addEventListener('click', () => {
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? 'text' : 'password';

    if (isPasswordVisible) {
      // Eye with slash icon
      eyeIcon.innerHTML = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      `;
    } else {
      // Eye open icon
      eyeIcon.innerHTML = `
        <path d="M1 Hunger2s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      `;
      eyeIcon.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      `;
    }
  });

  // Validation functions
  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return 'Email address is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required.';
    }
    if (value.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    return '';
  };

  const clearFieldError = (input, errorEl) => {
    input.classList.remove('input-error');
    errorEl.textContent = '';
  };

  const setFieldError = (input, errorEl, message) => {
    input.classList.add('input-error');
    errorEl.textContent = message;
  };

  // Real-time clearing on input
  emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('input-error')) {
      const err = validateEmail(emailInput.value);
      if (!err) clearFieldError(emailInput, emailError);
    }
  });

  passwordInput.addEventListener('input', () => {
    if (passwordInput.classList.contains('input-error')) {
      const err = validatePassword(passwordInput.value);
      if (!err) clearFieldError(passwordInput, passwordError);
    }
  });

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset alert
    alertBox.className = 'alert hidden';
    alertBox.textContent = '';

    const emailErr = validateEmail(emailInput.value);
    const passwordErr = validatePassword(passwordInput.value);

    if (emailErr) {
      setFieldError(emailInput, emailError, emailErr);
    } else {
      clearFieldError(emailInput, emailError);
    }

    if (passwordErr) {
      setFieldError(passwordInput, passwordError, passwordErr);
    } else {
      clearFieldError(passwordInput, passwordError);
    }

    if (emailErr || passwordErr) {
      return;
    }

    // Simulate login submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign In';

      alertBox.className = 'alert alert-success';
      alertBox.textContent = `Signed in successfully as ${emailInput.value.trim()}!`;
    }, 600);
  });
});
