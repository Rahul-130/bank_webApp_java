document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate successful login (in real scenario, validate with server-side logic)
    document.getElementById("adminLoginForm").style.display = "none";
    document.getElementById("loginAcknowledgment").style.display = "block";

    // Redirect to Admin Dashboard after acknowledgment
    setTimeout(function () {
        window.location.href = "admin_dashboard.html";
    }, 2000);
});
