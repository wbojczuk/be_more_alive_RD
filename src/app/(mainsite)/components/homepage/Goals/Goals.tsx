"use client"

import Link from 'next/link';
import styles from './goals.module.css';

export default function Goals(){
return (
 <div className={styles.goals}>

    <div className={styles.goalWrapper}>
        <Link href={"/program"} className={styles.goal}>
            <h3>Life Skills Coaching</h3>
        <img src='/img/goals/lifeskills.webp' alt='Image of more men' className={`bg-img ${styles.bg}`} />
        <div className={`shader-dark ${styles.shader}`}></div>
        </Link>

        <Link href={"/program"} className={styles.goal}>
            <h3>Fatherhood Coaching</h3>
        <img src='/img/goals/fatherhood.webp' alt='Image of more men' className={`bg-img ${styles.bg}`} />
        <div className={`shader-dark ${styles.shader}`}></div>
        </Link>

        <Link href={"/program"} className={styles.goal}>
            <h3>Community Engagement</h3>
        <img src='/img/goals/community.webp' alt='Image of more men' className={`bg-img ${styles.bg}`} />
         <div className={`shader-dark ${styles.shader}`}></div>
        </Link>

        <Link href={"/program"} className={styles.goal}>
            <h3>Workforce Development / Training</h3>
        <img src='/img/goals/work.webp' alt='Image of more men' className={`bg-img ${styles.bg}`} />
         <div className={`shader-dark ${styles.shader}`}></div>
        </Link>

        <Link href={"/program"} className={styles.goal}>
            <h3>Violence Prevention</h3>
        <img src='/img/goals/violence.webp' alt='Image of more men' className={`bg-img ${styles.bg}`} />
         <div className={`shader-dark ${styles.shader}`}></div>
        </Link>
    </div>
 
    <img src='/img/moremen.webp' alt='Image of more men' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255, 0.7)"}} className='shader'></div>
 </div>
)};