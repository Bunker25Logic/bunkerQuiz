import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyARhGzU3H5m8E-_lXXUqLgXHEVylH_jbY0",
  authDomain: "bunkerquiz-bc241.firebaseapp.com",
  projectId: "bunkerquiz-bc241",
  storageBucket: "bunkerquiz-bc241.firebasestorage.app",
  messagingSenderId: "693771181017",
  appId: "1:693771181017:android:9510dffa71aeef02e0d7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with Persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

export default app;
