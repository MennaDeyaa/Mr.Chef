# AI-Powered Recipe Generator 👨‍🍳🤖

An intelligent recipe suggestion web app built with React and Hugging Face’s AI model. 
Users enter a list of ingredients they have at home, and the app suggests a recipe based on those ingredients using the Mistral-8x7B AI model.

## Features

- Input ingredients manually and build a custom list
- Uses Hugging Face's `Mixtral-8x7B` model to generate recipe suggestions
- Smooth scrolling to suggested recipe section after generation
- Recipe response rendered in clean, readable **Markdown**
- Conditional rendering based on user interaction

## Technologies Used

- React (Hooks, Refs, Controlled Components)
- Hugging Face `InferenceClient` API
- JavaScript (ES6+)
- Vite (React development server)
- React Markdown for rendering AI response
- CSS for basic layout and styling

## What I Learned

- How to integrate external **AI APIs** in a React frontend
- Using `useRef` for smooth scrolling and DOM control
- Handling **controlled forms** and user input
- Conditional rendering and clean UI/UX flow
- Displaying **AI-generated content** dynamically in Markdown

### Steps for developers : 
1-make an API Key from hugging face .

2-create a file .env in the root folder - the same level as your package.json file . 

3- write this in the .env file
 VITE_HF_TOKEN=write_your_key_here
 
4- run => npm run dev again .

