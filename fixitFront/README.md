# **FiXit Web Application**

FiXit is a React-based web application that features a dynamic homepage, an About Us section, and a secure login page utilizing Google Authentication powered by Firebase.

## **Project Overview**

The FiXit web app allows users to easily navigate through various pages, including the **Home**, **About Us**, and **Login** sections. The integration of Google Login ensures a smooth and secure user experience, streamlining the authentication process. It also includes enhanced features like scroll control and bot interaction.

## **Tech Stack**

- **Frontend**: React, React Router DOM
- **Authentication**: Firebase Google Authentication
- **Backend**: FastAPI (for bot interaction)
- **Package Manager**: npm

## **Features**

- **Home Page**: Provides an overview and essential information about the app.
- **About Us Page**: Highlights the purpose and background of the application and its creators.
- **Login Page**: Users can securely sign in using their Google credentials, powered by Firebase Authentication.
- **Bot Page**: Users can interact with the bot, with backend support through FastAPI.

## **Installation**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v16.x or later)
- **npm** (v7.x or later)

### **Setup Steps**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/fixit-webapp.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd fixit-webapp
   ```

3. **Install project dependencies**:

   ```bash
   npm install
   ```

4. **Set up Firebase**:

   - Visit [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project.
   - Navigate to **Authentication** in the Firebase Console and enable Google Sign-In as a sign-in method.
   - Replace the placeholders in `src/firebase.js` with your Firebase config details.

5. **Start the development server**:

   ```bash
   npm start
   ```

6. **Open the app** in your browser:

   ```bash
   http://localhost:3000
   ```

## **Usage**

- Navigate between the **Home**, **About Us**, **Bot**, and **Login** pages.
- Use Google authentication to sign in from the **Login** page.
- Scroll control is restricted on the **Home** page until the user is logged in.
- Interact with the bot on the **Bot** page to get responses from the backend FastAPI.

## **Commit History**

### **First Commit**: Initial Structure

- Established the base structure of the React application.
- Implemented routing using `react-router-dom` for smooth navigation between **Home**, **About Us**, and **Login** pages.

### **Second Commit**: Implemented Gmail Login

- Integrated Firebase to handle authentication.
- Added Google Login functionality using `react-google-login` and Firebase, allowing users to securely sign in with their Google accounts.

### **Third Commit**: Scroll Control Without Login

- Implemented a feature that restricts scrolling on the **Home** page until the user is logged in.
- Improved user flow by enabling scrolling after successful authentication.

### **Fourth Commit**: Bot Page Added

- Integrated a bot interaction page where users can ask predefined questions.
- Connected the bot to the backend using FastAPI and Flask for handling user queries.
- The bot retrieves relevant data from the backend based on the user's questions.

