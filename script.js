// The list of valid username and password pairs
const validUsers = {
    "username1": "password1",
    "username2": "password2",
    // Add more username and password pairs as needed
};

document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const responseMessage = document.getElementById("response-message");

    if (isValidUser(username, password)) {
        responseMessage.textContent = "Authentication successful!";
        responseMessage.style.color = "green";
    } else {
        responseMessage.textContent = "Authentication failed!";
        responseMessage.style.color = "red";
    }
});

function isValidUser(username, password) {
    return validUsers[username] === password;
}
