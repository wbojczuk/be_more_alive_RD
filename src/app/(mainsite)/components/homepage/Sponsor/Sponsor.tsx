import styles from './fathersmatter.module.css';

export default function Sponsor(){
return (
 <div className={styles.fathersMatter}>
    <div className={styles.textWrapper}>
        <h2>Sponsor of the Daddy Daughter Dance!</h2>
        
    </div>
    <div className={styles.videoWrapper}>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0SPm_Z6U1CI?si=432WycWt3XEtrR0Y&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
 </div>
)};