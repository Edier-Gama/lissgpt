import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import '../../styles/Login.css'

function Login() {
 
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  
  const firebaseConfig = {
    apiKey: "AIzaSyBF9_kc1j_9hfKD-erpy3tsXlB4gg0mBOY",
    authDomain: "assistantgpt-8908b.firebaseapp.com",
    projectId: "assistantgpt-8908b",
    storageBucket: "assistantgpt-8908b.appspot.com",
    messagingSenderId: "686625363936",
    appId: "1:686625363936:web:9baf76c8dafa1132db7d85",
    measurementId: "G-6PY86QCH2L"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth()

  function signInWithEmail() {
    createUserWithEmailAndPassword(auth, email, password)
  }
  function signWithGoogle() {
    signInWithPopup(auth, provider)
  }

  return (
        <section className="login">
            <h2>Login</h2>
            <p>email</p>
            <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            <p>password</p>
            <input type="password" onChange={(event) => setPassword(event.target.value)}/><br/>
            <button onClick={signInWithEmail}></button><br/>
            <button onClick={signWithGoogle}></button>
        </section>
  )
}

export {Login}
