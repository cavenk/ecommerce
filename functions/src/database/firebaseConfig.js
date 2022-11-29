import {getFirestore} from "firebase-admin/firestore"
import { cert, initializeApp } from "firebase-admin/app";
import fs from "fs"


const serviceAccount = JSON.parse(fs.readFileSync("./e-commerce-app-5f6bb-firebase-adminsdk-4845k-5c9dfd1b27.json"))
const app = initializeApp({
  credential: cert(serviceAccount)
})

const firestoreDB = getFirestore(app)

export default firestoreDB
