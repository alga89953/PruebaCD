// Importa solo las funciones que necesitas de Firebase, junto con tus servicios necesarios
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import "firebase/firestore"
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Descomentar si usas Firestore
// import { getStorage } from 'firebase/storage'; // Descomentar si usas Firebase Storage

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCu2pMoI1ib7ytrCooIixxSxaJAuFuL2n0",
  authDomain: "shopgo-77e83.firebaseapp.com",
  projectId: "shopgo-77e83",
  storageBucket: "shopgo-77e83.appspot.com",
  messagingSenderId: "545794475964",
  appId: "1:545794475964:web:5762e91972a5d78cea0db9",
  measurementId: "G-1W39SFMW0B"
  
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app); // Descomentar si usas Firestore
// const storage = getStorage(app); // Descomentar si usas Firebase Storage

// Exporta solo los servicios que necesitas
export { auth, app };
 export { db }; // Descomentar si exportas Firestore
// export { storage }; // Descomentar si exportas Firebase Storage
