import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

async function signUpUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
}

// Call function with test credentials
signUpUser("test@example.com", "password123");
