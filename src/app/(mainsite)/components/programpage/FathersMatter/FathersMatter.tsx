import styles from './fathersmatter.module.css';

export default function FathersMatter(){
return (
 <div className={styles.fathersMatter}>
    <div className={styles.textWrapper}>
        <h2>Fathers Matter</h2>
        <p>Fathers play a crucial role in shaping their children's lives and the broader community. By modeling biblical teachings and fostering personal spiritual growth, fathers create a culture of discipleship. Their participation in supportive, inclusive communities builds networks for mutual support, equipping men with tools for trauma resilience and personal development.
<br /><br />
Fathers' engagement in emotional intelligence and self-awareness promotes individual growth and balanced, fulfilling lives. Embracing diversity, they enhance community cohesion and positively impact their families by encouraging strong family dynamics. By contributing to the broader community, fathers drive significant social impact. Through personal accountability and continuous improvement, they strive for ongoing growth and sustainability, fostering long-term positive change for themselves, their families, and their communities.</p>
    </div>
    <div className={styles.videoWrapper}>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KUCuBQ8bzcA?si=_ziBZoQ42xawPxSt&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
 </div>
)};