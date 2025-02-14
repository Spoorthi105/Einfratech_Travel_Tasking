document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get user input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from Local Storage
    const userData = JSON.parse(localStorage.getItem("user"));

    // Check if the user exists and credentials match
    if (userData && userData.email === email && userData.password === password) {
        // Redirect to a new page or show success message
        alert("Sign in successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        // Show error message
        document.getElementById("error-message").classList.remove("hidden");
    }
});