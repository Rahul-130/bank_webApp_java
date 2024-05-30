document.getElementById("depositForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const depositAmount = parseInt(document.getElementById("depositAmount").value);
    const currentBalance = 5000; // Simulate current balance

    const updatedBalance = currentBalance + depositAmount;

    document.getElementById("depositForm").style.display = "none";
    document.getElementById("depositAcknowledgment").style.display = "block";
    document.getElementById("updatedBalance").innerText = updatedBalance;
});
