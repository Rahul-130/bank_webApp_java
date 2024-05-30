document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate successful login (in real scenario, validate with server-side logic)
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginAcknowledgment").style.display = "block";

    // Redirect to Home Page after acknowledgment
    setTimeout(function () {
        window.location.href = "customer_dashboard.html";
    }, 1000);
});
