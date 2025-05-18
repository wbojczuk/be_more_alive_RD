import Link from "next/link"
import styles from "./pagetitle.module.css"

export default function CoachingPageTitle(props: {title: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.title}</h1>
        <h2></h2>

        <div className={`center ${styles.linkWrapper}`}>
          <Link className="main-link" href="/contact">Contact</Link>
        </div>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className="shader"></div>
    </header>
  )
}
