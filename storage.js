import { storage } from "./firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

async function uploadFile(file) {
  try {
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
    console.log("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

// Example usage (uploading a file from an input field)
document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadFile(file);
  }
});
