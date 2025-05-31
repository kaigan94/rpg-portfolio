// =====================================================
// 📦 Imports
// =====================================================
import React from "react"; // 🔁 React core
import ReactDOM from "react-dom/client"; // 🎯 React 18 root API
import App from "./App.jsx"; // 💻 Main app component
import "./styles/global.css"; // 🎨 Global CSS styles

// =====================================================
// 🚀 Mount React App
// =====================================================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
