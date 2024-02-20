import admin from "firebase-admin";

// Replace with your Firebase Admin SDK configuration
const serviceAccount = require("DB-KEY.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-firebase-project-id.firebaseio.com"
  });
}

export default admin;
