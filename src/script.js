document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const signUpLink = document.getElementById('signUp');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate login process
        simulateLogin(username, password);
    });

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality would be implemented here.');
    });

    signUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up functionality would be implemented here.');
    });

    function simulateLogin(username, password) {
        // Show loading state
        const submitButton = loginForm.querySelector('button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Logging in...';
        submitButton.disabled = true;

        // Simulate API call delay
        setTimeout(() => {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Simple validation (in a real app, this would be server-side)
            if (username === 'admin' && password === 'password') {
                alert('Login successful! Redirecting...');
                // In a real app, you would redirect to another page
                // window.location.href = '/dashboard';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        }, 1500);
    }
});