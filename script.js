document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Log the form data (in a real app, you'd send this to a server)
    console.log({
        email: email,
        password: password,
        rememberMe: remember
    });

    // Simulate successful login
    alert(`Login successful!\nEmail: ${email}`);
    
    // Reset form
    this.reset();
});
