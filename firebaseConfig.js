import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDg4EIol2MKAlmXMVHP_fC1jEILut4hq98",
  authDomain: "customer-support-1b68d.firebaseapp.com",
  projectId: "customer-support-1b68d",
  storageBucket: "customer-support-1b68d.appspot.com",
  messagingSenderId: "864035017840",
  appId: "1:864035017840:web:440cf5c2ae20c3513a90b5",
  databaseURL: "https://customer-support-1b68d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
