function sendMessage() {
    const inputField = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    if (inputField.value.trim() == 'I got a rank in JEE between 30000-40000 in Delhi which are the best institude to join?') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Delhi Technical University (DTU) ;Netaji Subhas University of Technology (NSUT);Guru Gobind Singh Indraprastha University';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
    }

    

    else if (inputField.value.trim() == 'I got a rank in JEE between 40000-50000 in Delhi which are the best institude to join?') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Guru Gobind Singh Indraprastha University (GGSIPU) ; Delhi Skill and Entrepreneurship University (DSEU) ; Jamia Millia Islamia (JMI)';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
        
    }

    else if (inputField.value.trim() == 'I got a rank in JEE between 40000-50000 in Delhi which are the best institude to join?') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Guru Gobind Singh Indraprastha University (GGSIPU) ; Delhi Skill and Entrepreneurship University (DSEU) ; Jamia Millia Islamia (JMI)';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
        
    }


    else if (inputField.value.trim() == 'I got a rank in JEE between 20000-30000 in Delhi which are the best institude to join?') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Delhi Technical University (DTU) ;Netaji Subhas University of Technology (NSUT)';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
    }

    else if (inputField.value.trim() == 'I got a rank in JEE between 30000-40000 in Delhi which college i should choose') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Delhi Technical University (DTU) ;Netaji Subhas University of Technology (NSUT);Guru Gobind Singh Indraprastha University';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
    }

    else if (inputField.value.trim() == 'My rank in JEE is between 30000-40000 in Delhi which are the best institude to join?') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Delhi Technical University (DTU) ;Netaji Subhas University of Technology (NSUT);Guru Gobind Singh Indraprastha University';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
    }

    else if (inputField.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputField.value;
        chatWindow.appendChild(userMessage);

        inputField.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'This is a simulated response.';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },1000);
}

else if (inputField.value.trim() == 'hello','hi','hey','Hello','HELLO','hllo') {
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = inputField.value;
    chatWindow.appendChild(userMessage);

    inputField.value = '';

    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = 'Hello!!!';
        chatWindow.appendChild(botMessage);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    },1000);
    
}
}
