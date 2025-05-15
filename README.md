# React Project :
This project uses AI to generate perfect recipes based on the ingredients provided by the user. The AI integration is done via the Hugging Face API, which processes the user’s input and returns customized recipe suggestions.


## Technologies & Concepts Used
	•	Event Listeners: Handling user interactions such as button clicks and form submissions
	•	State: Managing dynamic data with React’s useState hook
	•	Conditional Rendering: Displaying UI elements based on application state
	•	Forms: Capturing and processing user input through controlled forms
        • Used (useRef) to hold DOM element references and
        • (useEffect) to update or interact with those refs when component state changes.
	•	State Management Strategies

As developer : 
you have to make an API Key from hugging face as my code using their key 

### Steps for developers : 
1-make an API Key from hugging face .

2-create a file .env in the root folder - the same level as your package.json file . 

3- write this in the .env file
 VITE_HF_TOKEN=write_your_key_here
 
4- run => npm run dev again .

