import { authenticate } from './auth.js';

const form = document.getElementById('loginForm');
const alertBox = document.getElementById('formAlert');
const alertText = document.getElementById('formAlertText');
const submitButton = document.getElementById('submitButton');
const submitLabel = document.getElementById('submitLabel');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const togglePassword = document.getElementById('togglePassword');
const capsHint = document.getElementById('capsHint');

const REMEMBER_KEY = 'acme.rememberedUser';

/** Show a field-level message under the input. */
function setFieldError(field, message) {
    const group = form.querySelector(`[data-field="${field}"]`);
    const error = document.getElementById(`${field}Error`);

    group.classList.toggle('has-error', Boolean(message));
    error.textContent = message || '';

    if (message) {
        form.querySelector(`#${field}`).setAttribute('aria-invalid', 'true');
    } else {
        form.querySelector(`#${field}`).removeAttribute('aria-invalid');
    }
}

/** Show or hide the banner above the form. */
function setAlert(message) {
    alertText.textContent = message || '';
    alertBox.hidden = !message;
}

/** Remove the message under a field as soon as the user edits it. */
function clearErrorOnInput(field, input) {
    input.addEventListener('input', function () {
        if (field === 'password' && input.getAttribute('aria-invalid') === 'true') {
            setFieldError('password', '');
        }
        if (field === 'username' && input.getAttribute('aria-invalid') === 'true') {
            setFieldError('username', '');
        }
    });
}

clearErrorOnInput('username', usernameInput);
clearErrorOnInput('password', passwordInput);

/* Show the password as plain text on request. */
togglePassword.addEventListener('click', function () {
    const isVisible = passwordInput.type === 'text';

    passwordInput.type = isVisible ? 'password' : 'text';
    togglePassword.setAttribute('aria-pressed', String(!isVisible));
    togglePassword.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
    togglePassword.setAttribute('title', isVisible ? 'Show password' : 'Hide password');
    passwordInput.focus();
});

/* Warn the user when Caps Lock is on. */
passwordInput.addEventListener('keyup', function (event) {
    capsHint.hidden = !(event.getModifierState && event.getModifierState('CapsLock'));
});

passwordInput.addEventListener('blur', function () {
    capsHint.hidden = true;
});

/* Restore the username the user asked us to remember. */
try {
    const remembered = localStorage.getItem(REMEMBER_KEY);
    if (remembered) {
        usernameInput.value = remembered;
        document.getElementById('rememberMe').checked = true;
    }
} catch (error) {
    /* Storage is unavailable in private mode; the form still works. */
}

/* Placeholder destinations for the links that are not part of this page yet. */
document.getElementById('forgotPassword').addEventListener('click', function (event) {
    event.preventDefault();
    setAlert('Password reset is not available in this demo.');
});

document.getElementById('signUp').addEventListener('click', function (event) {
    event.preventDefault();
    setAlert('Account creation is not available in this demo.');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    setAlert('');

    const result = authenticate({
        username: usernameInput.value,
        password: passwordInput.value
    });

    if (!result.ok) {
        Object.keys(result.errors).forEach(function (field) {
            setFieldError(field, result.errors[field]);
        });

        if (result.reason === 'invalid-credentials') {
            setAlert('That username and password do not match an account.');
        }

        const firstField = Object.keys(result.errors)[0];
        if (firstField) {
            form.querySelector(`#${firstField}`).focus();
        }
        return;
    }

    setFieldError('username', '');
    setFieldError('password', '');

    submitButton.disabled = true;
    submitButton.classList.add('is-loading');
    submitLabel.textContent = 'Signing in…';

    try {
        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem(REMEMBER_KEY, result.user.username);
        } else {
            localStorage.removeItem(REMEMBER_KEY);
        }
    } catch (error) {
        /* Storage is unavailable; the sign-in still proceeds. */
    }

    /* Stand-in for the server round trip a real sign-in makes. */
    setTimeout(function () {
        window.location.href = 'dashboard.html?user=' + encodeURIComponent(result.user.username);
    }, 600);
});
