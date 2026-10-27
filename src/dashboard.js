document.addEventListener('DOMContentLoaded', function () {
    // Read the username passed from the login page (e.g. ?user=admin)
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user') || 'Admin';

    document.getElementById('userName').textContent = user;
    document.getElementById('welcomeUser').textContent = user;

    const logoutLink = document.getElementById('logoutLink');
    logoutLink.addEventListener('click', function (e) {
        e.preventDefault();
        // In a real app, clear the session/server-side cookie here.
        window.location.href = 'login.html';
    });
});