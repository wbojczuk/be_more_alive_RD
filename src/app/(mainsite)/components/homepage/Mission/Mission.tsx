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

            <p>Michael Hall is a community chaplain, fatherhood mentor, and founder of Be‑More Alive Ministry in Asheville, NC, a faith-based outreach dedicated to helping men heal, grow, and lead their families with purpose.
<br /><br />
Drawing from his own journey through addiction, incarceration, and redemption, Michael walks alongside fathers, returning citizens, and men in crisis with a blend of biblical wisdom, trauma‑informed care, and practical life skills.
<br /><br />
Through Be‑More Alive, he leads programs such as Parenting Behind Bars, Doula for Dads, Fatherhood Enrichment, and men’s mental health support groups that create safe spaces for men to tell the truth, confront their pain, and build new patterns for their lives and families.
<br /><br />
 Michael also serves the wider community through chaplaincy, coaching, and collaboration with local churches and nonprofits, believing that when a man’s heart is transformed, his home and community are transformed too.
<br /><br />
The mission of Be‑More Alive Ministry is to see men fully alive in Christ—emotionally, spiritually, and relationally—so they can show up wholeheartedly for their children, partners, and communities.
We serve justice‑involved fathers, new and expecting dads, and men navigating trauma or transition through discipleship, practical coaching, and community support that honors both their story and their God‑given potential.
By partnering with local churches, nonprofits, and community agencies, we work to end cycles of fatherlessness and build a culture where men are known, supported, and equipped to lead with love.
            </p>
            <a href="/contact" className="main-link">Make a Difference</a>
        </div>

        <img src="/img/cross.webp" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
