import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const adminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  databaseURL: `https://${process.env.FIREBASE_ADMIN_PROJECT_ID}.firebaseio.com`,
};

export const adminApp =
  getApps().length === 0 ? initializeApp(adminConfig) : getApps()[0];
export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
