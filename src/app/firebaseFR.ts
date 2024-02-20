// // /src/lib/firebase.ts
// import admin from "firebase-admin";
// import { cert } from "firebase-admin/app";
// import certConfig from "./firebase-adminsdk-config.json"

// admin.initializeApp({
//   credential: cert(certConfig)
// });
// console.log("Firebase initialized.");

// export default admin;

import { doc } from "firebase/firestore";
const {
  initializeApp,
  applicationDefault,
  cert
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter
} = require("firebase-admin/firestore");
const serviceAccount = require("/Next Nasdaq/stock-app/DB-KEY.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const docRef = db.collection("userData").doc("qwPDPQhVQFrDHtiHDLjh");
