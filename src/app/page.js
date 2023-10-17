'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
 const [name, setName] = useState("alielmissaoui")
  const appel = ()=>{
    setName ("Lolol");
  }
  const navigation = (name) =>{
     router.push("about/" + name);
  }
  return (
    <main className={styles.main}>
      <h1>{name}</h1>
      <button onClick={() => appel()}> click me !</button>
      <button onClick={() => navigation('aboutstudent')}> go to about student page</button>
      <button onClick={() => navigation('/login')}> go to login page</button>
      <Link href="/productlist">go to product list </Link>
    </main>
  )
}
