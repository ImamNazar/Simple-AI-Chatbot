# Simple-AI-Chatbot

# index.html
The provided HTML code creates a simple chatbot interface that allows users to interact with an AI chatbot.

The HTML file begins with the `<!DOCTYPE html>` declaration and contains the basic structure of an HTML file. The `head` section includes a meta tag specifying the character encoding and a title for the page, as well as a link to the CSS stylesheet used to style the chatbot interface.

The `body` section contains a `div` element with the class "container", which serves as a wrapper for the chatbot interface. Within the container, there is a `div` element with the class "chat-window", which contains the entire chatbot interface.

The chatbot interface is divided into three main sections: the chat header, the chat history, and the chat input. The chat header includes a `div` element with the class "chat-header", which contains a `h2` element with the text "Simple AI Chatbot". The chat history section is a `div` element with the class "chat-history" and an `id` of "chat-history". This section will display the chat history between the user and the chatbot. The chat input section is a `div` element with the class "chat-input", which contains an `input` element with the `type` attribute set to "text" and an id of "prompt". This is where the user can type their message to the chatbot. There is also a `button` element with an `id` of "submit-btn", which the user can click to submit their message to the chatbot.

The HTML file also includes two scripts. The first is a link to the jQuery library, which is used in the `script.js` file. The second is a reference to the `script.js` file, which contains the JavaScript code that powers the chatbot.

# style.css
The provided CSS code is responsible for styling the HTML code of a chatbot interface. Here's a brief explanation of the different sections of the CSS file:

* The `*` selector applies the box-sizing property to all elements, and sets the margin and padding to 0.

* The `body` selector sets the font-family to monospace and applies a background image using a URL.

* The `.container` class defines the maximum width of the chat window and sets the margins and padding.

* The `.chat-window` class applies a border, border-radius, and overflow properties, and defines an animation for sliding in the chat window.

* The `.chat-header` class defines the background color, padding, and border for the chat header, as well as the text alignment and a border at the bottom.

* The `.chat-history` class sets the height, padding, and overflow-y properties, and defines an animation for fading in the chat history.

* The `.chat-history p` selector sets the margins, padding, border-radius, background color, and box-shadow properties for the chat messages.

* The `.chat-input` class sets the display, align-items, and padding properties, and defines an animation for sliding up the chat input.

* The `.chat-input input[type="text"]` selector sets the flex-grow, padding, border-radius, border, outline, font-size, color, background-color, and box-shadow properties for the chat input field.

* The `.chat-input input[type="text"]::placeholder` selector sets the color of the placeholder text.

* The `.chat-input button` selector sets the padding, background-color, color, border, border-radius, cursor, margin-left, and transition properties for the chat submit button.

* The `@media` rule applies the CSS properties within the brackets only when the screen size is less than or equal to 600px. It modifies the chat input styles for smaller screens.

Overall, this CSS file creates an attractive and responsive chatbot interface with smooth animations and clear text styles.


# script.js
This JavaScript code is for a chatbot that uses OpenAI's text-davinci-003 language model to generate responses to user prompts.

The code starts by setting a constant variable `API_KEY` to a valid OpenAI API key, which is used in the HTTP headers to authenticate the API request.

Next, the code adds a greeting message to the chat history when the page loads, using the `append()` method to add a new `<p>` element to the `<div>` with the ID `#chat-history`.

When the user clicks the submit button, the code retrieves the user's input from the `<input>` element with the ID `#prompt`, converts it to lowercase, and checks if the user wants to exit the chat by looking for the keywords 'quit', 'exit', or 'bye'.

If the user wants to exit, the chatbot sends a goodbye message and returns from the function.

Otherwise, the code sends a POST request to the OpenAI API with the user's prompt as the input, using the `$.ajax()` function in jQuery. The API request includes several parameters, such as `max_tokens` (the maximum number of tokens to generate), `n` (the number of responses to generate), and `temperature` (a value that controls the randomness of the generated responses).

If the API request is successful, the code retrieves the generated response from the API's response data and appends it to the chat history using the `append()` method. If the API request fails, an error message is logged to the console.

Finally, the code clears the input field by setting its value to an empty string using the `val()` method.

Overall, this code provides a basic structure for a chatbot that can communicate with users and generate responses using OpenAI's language model.
