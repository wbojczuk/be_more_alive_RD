"use client"
import styles from "./mission.module.css"
import Link from "next/link"

export default function Mission() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/mission.jpg"} width={360} height={600} alt="Image of the Pastor" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline"><strong>Our</strong> Mission</span></h2>

            <section className={styles.missions}>
  <br /><br />
  <p><em>A safe space for men to grow, reflect, and heal.</em></p>

  <hr />

  <h3>Explore Your Identity</h3>
  <p>
    This peer-led program is designed to help men break through stereotypes, build self-awareness, 
    and engage in real, meaningful conversations. Whether you're working through personal challenges 
    or simply looking to grow, this circle provides support, accountability, and community.
  </p>

  <hr />

  <h3>Why Join This Program</h3>
  <ul>
    <li>Open and judgment-free environment</li>
    <li>Real conversations about identity, purpose, and growth</li>
    <li>Brotherhood and community support</li>
    <li>Focus on mental, emotional, and spiritual well-being</li>
  </ul>

  <hr />

  <h3>Program Cost</h3>
  <p><strong>100% Free</strong></p>
  <p>
    Take the first step toward healing and self-discovery—no cost, no pressure, just support.
  </p>

  <hr />

  <h3>Get Connected</h3>
  <p>
    Join us in exploring identity and healing within a supportive community.
  </p>
  <ul>
    <li>Call: 828-216-9077</li>
    <li>Email: Bemorealive828@gmail.com</li>
  </ul>

  <hr />

  <h3>Location</h3>
  <p>NAMI Western Carolina</p>
  <p>356 Biltmore Ave, Ste 207</p>
  <p>Asheville, NC 28801</p>

  <hr />


</section>
            <a href="/contact" className="main-link">Start your journey today.</a>
        </div>

        <img src="/img/cross.webp" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
