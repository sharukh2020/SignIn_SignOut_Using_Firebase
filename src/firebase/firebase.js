import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJLO8rFdCo8wcHVUTGpI9OztPSorVorDw",
  authDomain: "fir-test-project-6ec2b.firebaseapp.com",
  projectId: "fir-test-project-6ec2b",
  storageBucket: "fir-test-project-6ec2b.firebasestorage.app",
  messagingSenderId: "241921511948",
  appId: "1:241921511948:web:84cd2bacf648bfd468d429"
};

const app = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LcMX5srAAAAAJqQ1SevcczpKAr93Po7ZzyRRgIy'),
  isTokenAutoRefreshEnabled: true,
});

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };