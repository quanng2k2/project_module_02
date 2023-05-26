// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4n_6V_dX859fpbjTLcytCu0t2XqKMYGc",
  authDomain: "uoload-image-ft02.firebaseapp.com",
  projectId: "uoload-image-ft02",
  storageBucket: "uoload-image-ft02.appspot.com",
  messagingSenderId: "464007430109",
  appId: "1:464007430109:web:8c658c106f36155eeb0034",
  measurementId: "G-L0LYFFBYBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu trữ của bạn
export const storage = getStorage(app);
