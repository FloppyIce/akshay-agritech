import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addUserData(name, email) {
  try {
    await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      createdAt: new Date(),
    });
    console.log("User added successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Call function with test data
addUserData("John Doe", "johndoe@example.com");
