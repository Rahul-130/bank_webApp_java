const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const ssnId = document.getElementById("ssnId").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const contactNumber = document.getElementById("contactNumber").value;

    const accountId = "AC" + Math.floor(Math.random() * 1000000000);

    document.getElementById("accountId").innerText = accountId;
    document.getElementById("customerName").innerText = `${firstName} ${lastName}`;

    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("acknowledgment").style.display = "block";
});
