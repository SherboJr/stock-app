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

export async function POST(req, res) {
  const data = await req.json();
  console.log(data);

  return Response.json(data);
}
