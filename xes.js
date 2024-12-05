function checkPassword() {
    const password = document.getElementById('launch-password').value;
    if (password === "elevenacces") {
        window.location.href = "xes.html";
    } else {
        alert("Incorrect Password. Try again.");
    }
}
