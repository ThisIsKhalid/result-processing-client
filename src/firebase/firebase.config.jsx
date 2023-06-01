import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDTCptrgBLunOFLZSL0BFkwU0K0Q3rnZY",
  authDomain: "find-your-result.firebaseapp.com",
  projectId: "find-your-result",
  storageBucket: "find-your-result.appspot.com",
  messagingSenderId: "345219496573",
  appId: "1:345219496573:web:f05cb31da313e91d78cf14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
