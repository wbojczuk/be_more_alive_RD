import styles from './enrichment.module.css';

export default function Enrichment(){
return (
 <div className={styles.enrichment}>

    <h2>
        <span className="underline">Men and Fatherhood</span><br />
        <span className="underline">Enrichment</span>
    </h2>
 
    <img src='/img/men.png' alt='Image of Men' className='bg-img' />
    <div className='shader-dark'></div>
 </div>
)};