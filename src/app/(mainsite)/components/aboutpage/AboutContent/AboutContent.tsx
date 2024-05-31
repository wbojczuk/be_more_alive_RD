"use client"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/mike.png"} width={360} height={600} alt="Image of Mike" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline"><strong>About Mike </strong></span></h2>

            <p>In the broader community, the presence of positive father figures can reduce the likelihood of youth engaging in criminal activities, substance abuse, and other detrimental behaviors. They serve as role models, demonstrating the values of responsibility, hard work, and perseverance. The transformative journey of individuals like Michael Hall, who went from a life of crime to becoming a mentor and minister, underscores the profound impact that fathers and father figures can have not only on their own families but also on the wider community. Michael's story highlights the importance of redemption, second chances, and the enduring influence of a father's love and guidance.
            </p>
            <a href="/contact" className="main-link">Make a Difference</a>
        </div>

        <img src="/img/cross.png" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
