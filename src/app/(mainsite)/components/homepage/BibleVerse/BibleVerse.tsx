import styles from './bibleverse.module.css';

export default function BibleVerse(){
return (
 <header className={styles.bibleVerse}>
    
    <p>“Be watchful, stand firm in the faith, act like men, be strong” <strong>- 1st Corinthians 16:13</strong></p>

    <img src='/img/bible-bg.webp' alt='Image of Bible' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.3)"}} className='shader'></div>
 </header>
)};