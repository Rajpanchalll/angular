// src/environments/environment.ts
export const environment = {
  production: false,
  baseURL: 'http://localhost:3000/api',
  firebase: {
    apiKey: "AIzaSyBiT9sHMWwa7Uwj09Ct_75eX-eZtdXRUWc",
    authDomain: "angular-66e7d.firebaseapp.com",
    projectId: "angular-66e7d",
    storageBucket: "angular-66e7d.appspot.com",  // ✅ FIXED from "firebasestorage.app"
    messagingSenderId: "926408745722",
    appId: "1:926408745722:web:1857cffddda88755ee9f43",
    measurementId: "G-YCPLQPV51Z"
  }
};
