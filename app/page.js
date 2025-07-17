"use client"

import Image from "next/image";
import styles from "./page.module.css";
import HomePage from './components/HomePage'
import {signIn, signOut, useSession} from 'next-auth/react'

export default function Home() {

  const {data:session} = useSession()
  console.log(session);
  
  if(session) {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      
        <h2>Please sign in</h2>
        <button onClick={()=> {signIn()}}>Signin</button>
      
    </div>
  );
}
