document.getElementById("balanceForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("accountNumber").value;

    // Simulate balance check (in real scenario, fetch from server-side)
    const currentBalance = 5000; // Example balance

    document.getElementById("balanceForm").style.display = "none";
    document.getElementById("balanceDisplay").style.display = "block";
    document.getElementById("currentBalance").innerText = currentBalance;
});
