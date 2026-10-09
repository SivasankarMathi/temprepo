document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const togglePasswordBtn = document.getElementById("togglePassword");
  const alertBox = document.getElementById("alert");
  const submitBtn = document.getElementById("submitBtn");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).trim().toLowerCase());
  };

  const clearErrors = () => {
    emailError.textContent = "";
    passwordError.textContent = "";
    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");
    alertBox.className = "alert hidden";
    alertBox.textContent = "";
  };

  togglePasswordBtn.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");
    togglePasswordBtn.textContent = isPassword ? "Hide" : "Show";
    togglePasswordBtn.setAttribute(
      "aria-label",
      isPassword ? "Hide password" : "Show password"
    );
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("input-error")) {
      emailError.textContent = "";
      emailInput.classList.remove("input-error");
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.classList.contains("input-error")) {
      passwordError.textContent = "";
      passwordInput.classList.remove("input-error");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    let isValid = true;

    if (!email) {
      emailError.textContent = "Email is required";
      emailInput.classList.add("input-error");
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email address";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required";
      passwordInput.classList.add("input-error");
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      passwordInput.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Signing in...";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Sign In";

      alertBox.className = "alert alert-success";
      alertBox.textContent = "Successfully signed in!";
      form.reset();
    }, 600);
  });
});
