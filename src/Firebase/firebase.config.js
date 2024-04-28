import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3KtFvQyV41-aC-GR178CPWMAAgC9EZ34",
  authDomain: "a10-art-fusion.firebaseapp.com",
  projectId: "a10-art-fusion",
  storageBucket: "a10-art-fusion.appspot.com",
  messagingSenderId: "973212012939",
  appId: "1:973212012939:web:9367732a8b394ac59b1f8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
