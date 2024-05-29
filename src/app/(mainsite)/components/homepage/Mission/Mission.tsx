"use client"
import styles from "./mission.module.css"
import Link from "next/link"

export default function Mission() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/mission.png"} width={360} height={600} alt="Image of the Pastor" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline"><strong>Our</strong> Mission</span></h2>

            <p>Welcome to Be-More Alive Ministry, where transformation thrives through faith, community, and purpose.
<br /><br />
Led by founder Michael Hall, our Men's Discipleship and Development initiative empowers men to rise above adversity, embrace redemption, and cultivate holistic well-being. Join us on a journey of spiritual awakening, mentorship, and social impact as we strive to be more alive in every aspect of life.
            </p>
            <a href="/contact" className="main-link">Make a Difference</a>
        </div>

        <img src="/img/cross.png" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
