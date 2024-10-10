function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("chat-box").innerHTML += "<p>User: " + userInput + "</p>";
    document.getElementById("user-input").value = "";
    // Call a function to generate bot response
    generateResponse(userInput);
  }
  
  function generateResponse(userInput) {
    // Your logic to generate bot response based on user input
    var botResponse = "Bot: Thanks for your message!";
    
    document.getElementById("chat-box").innerHTML += "<p>" + botResponse + "</p>";
  }
  function generateResponse(userInput) {
    // Define responses for various user inputs
    let responses = {
      "hello": "Hello! How can I assist you?",
      "how are you?": "I'm just a bot, but I'm here to help!",
      "what is computer?":"computer is an electrinic device that allows the user to input data output data "
      // "what are you?": "im a chatbot and im here to help you how can i help you?"
      




      // Add more responses for other user inputs
    }};
 
  
    // Check if the user input exists in the responses object
    if (responses.hasOwnProperty(userInput.toLowerCase())) {
      var botResponse = "Bot: " + responses[userInput.toLowerCase()];
    } else {
      var botResponse = "Bot: Sorry, I don't understand that.";
    }
  
    // Display bot response in the chat box
    document.getElementById("chat-box").innerHTML += "<p>" + botResponse + "</p>";
  }