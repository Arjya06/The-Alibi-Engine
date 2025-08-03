
# The Alibi Engine

**Generate context-aware, customizable, and proof-backed excuses for any situation.**

The Alibi Engine is a sophisticated web application powered by the Google Gemini API. It acts as an intelligent assistant to generate highly believable and situationally appropriate excuses, complete with supporting "proof" and a corresponding apology.

![The Alibi Engine Screenshot](https://i.imgur.com/your-screenshot-url.png) 
*(Note: Replace with an actual screenshot of the app)*

---

## ✨ Key Features

- **Context-Aware Generation**: Leverages the Gemini model to understand the user's specific scenario (work, social, family) and context.
- **Ranked Options**: Delivers three distinct alibis, ranked by effectiveness, giving the user multiple options to choose from.
- **Deep Customization**: Users can tailor the output by specifying:
    - **Urgency**: From Low to Critical.
    - **Believability**: From Plausible to Ironclad.
    - **Apology Style**: Professional, Emotional, Casual, etc.
    - **Language**: Supports multiple languages for global users.
- **Supportive Proof**: For each alibi, the engine generates a plausible piece of evidence, such as an email draft, a system alert text, or a chat message.
- **Paired Apologies**: Each excuse comes with a well-crafted apology that matches the requested tone.
- **Sleek & Modern UI**: A responsive, dark-themed interface built with React and Tailwind CSS for a seamless user experience.
- **Copy to Clipboard**: Easily copy any part of the generated alibi (the excuse, apology, or proof) with a single click.

---

## 🤖 How It Works

The Alibi Engine masterfully combines a user-friendly frontend with the power of generative AI.

1.  **Input**: The user fills out the configuration form, providing details about their situation.
2.  **Prompt Engineering**: The application constructs a detailed, structured prompt based on the user's input. This prompt instructs the Gemini AI to act as "The Alibi Engine" and adhere to a strict set of rules.
3.  **API Call**: The request is sent to the **`gemini-2.5-flash`** model via the `@google/genai` SDK. The request specifies a `responseSchema` to ensure the AI returns data in a predictable JSON format.
4.  **JSON Parsing**: The application receives the structured JSON response from the API.
5.  **Display Results**: The frontend parses the data and dynamically renders the three ranked alibis in an intuitive tabbed card layout, allowing the user to easily switch between the excuse, the apology, and the generated proof.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Generative AI**: Google Gemini API (`gemini-2.5-flash` model)
- **API Client**: `@google/genai` SDK
- **Rendering**: The app is rendered client-side.

---

## 📂 Project Structure

```
/
├── components/
│   ├── AlibiCard.tsx     # Displays a single ranked alibi with tabs
│   ├── InputForm.tsx     # The main form for user input
│   └── Loader.tsx        # A loading spinner component
├── services/
│   └── geminiService.ts  # Logic for interacting with the Gemini API
├── App.tsx               # Main application component, manages state
├── constants.ts          # Constants for form dropdowns
├── index.html            # Main HTML file
├── index.tsx             # React root entry point
├── metadata.json         # Application metadata
└── types.ts              # TypeScript type definitions
```

---

## 🚀 Getting Started

This is a self-contained web application. To run it, you need a development environment that can serve the `index.html` file and provide the necessary `API_KEY`.

**Prerequisites**:
- An environment where `process.env.API_KEY` is set to a valid Google AI Studio API key.

The application is designed to work out-of-the-box in environments like Framer, where the API key is securely managed as an environment variable.
