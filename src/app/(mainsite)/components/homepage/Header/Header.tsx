"use client"

import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>Be More Alive</h1>
    <h2>Our mission is to enrich men's lives through a Bible-based initiative</h2>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/programs'>Learn More</Link>
    </div>
 
    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};