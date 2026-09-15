const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formMessage = document.getElementById("form-message");
const submitBtn = document.getElementById("submit-btn");

function setEmailError(message) {
  emailError.textContent = message;
  emailInput.classList.toggle("invalid", !!message);
}

function setPasswordError(message) {
  passwordError.textContent = message;
  passwordInput.classList.toggle("invalid", !!message);
}

function validate() {
  let valid = true;

  if (!emailInput.value.trim()) {
    setEmailError("Email is required.");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    setEmailError("Please enter a valid email address.");
    valid = false;
  } else {
    setEmailError("");
  }

  if (!passwordInput.value) {
    setPasswordError("Password is required.");
    valid = false;
  } else if (passwordInput.value.length < 8) {
    setPasswordError("Password must be at least 8 characters.");
    valid = false;
  } else {
    setPasswordError("");
  }

  return valid;
}

// Demo credentials — replace with real authentication in production.
const DEMO_USER = { email: "demo@example.com", password: "password123" };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "";
  formMessage.className = "form-message";

  if (!validate()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Signing in...";

  // Simulate a server request.
  setTimeout(() => {
    const email = emailInput.value.trim().toLowerCase();
    if (email === DEMO_USER.email && passwordInput.value === DEMO_USER.password) {
      formMessage.classList.add("success");
      formMessage.textContent = "Signed in successfully!";
    } else {
      formMessage.classList.add("fail");
      formMessage.textContent = "Invalid email or password.";
    }
    submitBtn.disabled = false;
    submitBtn.textContent = "Sign in";
  }, 600);
});

// Clear errors as the user types.
emailInput.addEventListener("input", () => setEmailError(""));
passwordInput.addEventListener("input", () => setPasswordError(""));