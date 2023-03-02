// JavaScript Document
// Replace 'API_KEY' with a valid OpenAI API key obtained from the OpenAI website
const API_KEY = '<API_KEY>';

$(document).ready(function() {
  // Show a greeting message when the page loads
  $('#chat-history').append('<p>Hi, I am a chatbot built by Mohamed Imam and Kanishkar Moorthy. How can I help you today?</p>');

  // Send a request to the OpenAI API when the submit button is clicked
  $('#submit-btn').click(function() {
    // Get the user input and convert it to lowercase
    const prompt = $('#prompt').val().toLowerCase();

    // Check if the user wants to exit the chat
    if (prompt === 'quit' || prompt === 'exit' || prompt === 'bye') {
      $('#chat-history').append('<p>Chatbot: Goodbye! Have a great day.</p>');
      return;
    }

    // Send a request to the OpenAI API to generate a response
    $.ajax({
      type: 'POST',
      url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
      headers: {
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        prompt: prompt,
        max_tokens: 200,
        n: 1,
        temperature: 0.5
      }),
      success: function(data) {
        // Get the generated response from the OpenAI API and append it to the chat history
        const response = data.choices[0].text;
        $('#chat-history').append('<p>Chatbot: ' + response + '</p>');
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });

    // Clear the input field after the user submits the input
    $('#prompt').val('');
  });
});


//spinner animation for the button
const button = document.querySelector('.chat-input button');
const input = document.querySelector('.chat-input input[type="text"]');
const chatHistory = document.querySelector('.chat-history');

button.addEventListener('click', function() {
  if (input.value !== '') {
    button.classList.add('loading');
    // Call function to make request
    makeRequest(function(response) {
      // Add response to chat history
      const message = document.createElement('p');
      message.textContent = response;
      chatHistory.appendChild(message);
      chatHistory.scrollTop = chatHistory.scrollHeight;
      // Clear input and remove loading class
      input.value = '';
      button.classList.remove('loading');
    });
  }
});

function makeRequest(callback) {
  // Simulate a request delay
  setTimeout(function() {
    callback('Is there anything else you would want to know?');
  }, 10000);
}