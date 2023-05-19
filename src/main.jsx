import ReactDOM from "react-dom/client";
import { Slide, ToastContainer } from "react-toastify";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ToastContainer position="top-right" autoClose={1500} transition={Slide} />
    <App />
  </AuthProvider>
);
