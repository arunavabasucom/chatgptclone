import admin from "firebase-admin";
import { ServiceAccount, getApps } from "firebase-admin/app";
import serviceAccountKey from "./serviceAccountKey.json";

const serviceAccount = JSON.parse(
  JSON.stringify(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)
);
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey as ServiceAccount),
  });
}

const admindb = admin.firestore();

export { admindb, admin };
