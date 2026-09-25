document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("togglePassword");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formAlert = document.getElementById("formAlert");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  togglePasswordBtn.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");
    togglePasswordBtn.textContent = isPassword ? "Hide" : "Show";
  });

  const clearErrors = () => {
    emailError.textContent = "";
    passwordError.textContent = "";
    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");
    formAlert.className = "form-alert";
    formAlert.textContent = "";
    formAlert.style.display = "none";
  };

  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("input-error")) {
      if (emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "";
        emailInput.classList.remove("input-error");
      }
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.classList.contains("input-error")) {
      if (passwordInput.value.length >= 6) {
        passwordError.textContent = "";
        passwordInput.classList.remove("input-error");
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    let isValid = true;

    if (!email) {
      emailError.textContent = "Email is required.";
      emailInput.classList.add("input-error");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required.";
      passwordInput.classList.add("input-error");
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      passwordInput.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    formAlert.className = "form-alert success";
    formAlert.textContent = "Login successful! Redirecting...";
    formAlert.style.display = "block";
  });
});
