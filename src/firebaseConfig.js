import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAWCwJTsLk2MtnIe0KQzEh1xfxnSP8BU1w",
  authDomain: "resume-builder-a1463.firebaseapp.com",
  projectId: "resume-builder-a1463",
  storageBucket: "resume-builder-a1463.appspot.com",
  messagingSenderId: "1067783858088",
  appId: "1:1067783858088:web:22350a9fb353fd3f939f9d"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)