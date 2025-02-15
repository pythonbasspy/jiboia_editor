document.getElementById("chatbot-button").addEventListener("click", function () {
    const chatWindow = document.getElementById("chatbot-window");
    chatWindow.classList.toggle("hidden");
});

document.getElementById("send-button").addEventListener("click", function () {
    const userInput = document.getElementById("chat-input").value;
    if (!userInput.trim()) return;

    // Send message to server
    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
    })
        .then((response) => response.json())
        .then((data) => {
            const chatDisplay = document.getElementById("chat-display");
            chatDisplay.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
            chatDisplay.innerHTML += `<p><strong>Chatbot:</strong> ${data.response}</p>`;
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
            document.getElementById("chat-input").value = "";
        });
});