document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Basic validation
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Simulate login
    console.log('Login attempt:', { email, remember });
    showMessage('Login successful!', 'success');
    
    // Clear form
    setTimeout(() => {
        this.reset();
        document.querySelector('.login-message').style.display = 'none';
    }, 1500);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    let messageEl = document.querySelector('.login-message');
    
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'login-message';
        document.querySelector('.login-box').insertBefore(messageEl, document.querySelector('form'));
    }
    
    messageEl.textContent = message;
    messageEl.className = `login-message ${type}`;
}
