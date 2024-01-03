import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseConfig = {
  apiKey: "AIzaSyA2QDAYCSqtdM3F4_D40EH8eCAINT3VOZ8",
  authDomain: "cosmo-bot-73c6c.firebaseapp.com",
  projectId: "cosmo-bot-73c6c",
  storageBucket: "cosmo-bot-73c6c.appspot.com",
  messagingSenderId: "949910305851",
  appId: "1:949910305851:web:f35d8f81738968232c701e",
  measurementId: "G-12Y2TV2PJ0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
