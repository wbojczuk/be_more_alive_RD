"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function Donate(){
return (
 <div className={styles.find}>

<div className="center">
<h2>Donation Request for the Faith Family Foundation Night</h2>
</div>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/donate`}>Read More</Link>
    </div>
 
    <img src='/img/donate.png' alt='Image of storage boxes' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.75)"}} className='shader'></div>
 </div>
)};