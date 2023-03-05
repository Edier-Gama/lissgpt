import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function SignUp() {
    return (
       <>
       <section className="signup-section">
         <h2>Registro</h2>
         <p>email</p>
         <input type="text" />
         <p>password</p>
         <input type="text" />
       </section>
       </>
    )
}

export {SignUp}