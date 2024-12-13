async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessageToChat('user', message);
        userInput.value = '';
        try {
            const response = await fetch('/api/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: message }),
            });
            const data = await response.json();
            addMessageToChat('tutor', data.answer);
        } catch (error) {
            console.error('Error:', error);
            addMessageToChat('tutor', 'Sorry, there was an error processing your request.');
        }
    }
}
