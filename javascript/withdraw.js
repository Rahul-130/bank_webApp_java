document.getElementById("withdrawForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const withdrawAmount = parseInt(document.getElementById("withdrawAmount").value);
    const currentBalance = 5000; // Simulate current balance

    if (withdrawAmount < 1000) {
        alert("Minimum withdrawal amount is 1000.");
        return;
    }

    const remainingBalance = currentBalance - withdrawAmount;

    if (remainingBalance < 500) {
        document.getElementById("balanceWarning").style.display = "block";
        return;
    }

    document.getElementById("withdrawForm").style.display = "none";
    document.getElementById("withdrawAcknowledgment").style.display = "block";
    document.getElementById("remainingBalance").innerText = remainingBalance;
});
