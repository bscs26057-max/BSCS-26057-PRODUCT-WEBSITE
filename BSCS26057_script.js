function sendMessage() {
    var input = document.getElementById("userInput");
    var chatbox = document.getElementById("chatbox");

    var userMessage = input.value;

    // Check if the input is empty
    if (userMessage == "") {
        alert("Please enter a message.");
        return;
    }

    // Display user's message
    var userText = document.createElement("p");
    userText.className = "user-message";
    userText.innerHTML = "User: " + userMessage;
    chatbox.appendChild(userText);

    // Display chatbot reply
    var botText = document.createElement("p");
    botText.className = "bot-message";
    botText.innerHTML = "Chatbot: You said " + userMessage;
    chatbox.appendChild(botText);

    // Clear the input box
    input.value = "";
}
