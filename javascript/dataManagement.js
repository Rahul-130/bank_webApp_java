document.getElementById("dataManagementForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate successful update (in real scenario, update with server-side logic)
    document.getElementById("dataManagementForm").style.display = "none";
    document.getElementById("updateAcknowledgment").style.display = "block";
});
