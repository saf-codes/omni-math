document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat('user', message);
            userInput.value = '';
            // Here, you would typically send the message to your backend
            // and get a response from the AI tutor
            // For now, we'll initiate a response after a short delay
            setTimeout(() => {
                const tutorResponse = "This is a simulated response from the AI Math Tutor. In a real implementation, this would be replaced with the actual response from your backend.";
                addMessageToChat('tutor', tutorResponse);
            }, 1000);
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
