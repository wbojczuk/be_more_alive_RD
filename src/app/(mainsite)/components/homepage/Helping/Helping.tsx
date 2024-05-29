import styles from './helping.module.css';

export default function Helping(){
return (
 <div className={styles.helping}>

    <h2>Helping The<br /><span className="highlight">Community</span></h2>

    <p>People like you are what keep us going. We thank you for any donations!</p>

    <a href="https://venmo.com/code?user_id=3291848516829184263" target='_blank' className="main-link">Donate</a>
 
    <img style={{objectPosition: "top"}} src='/img/helping.png' alt='Image of Volunteers' className='bg-img' />
    <div className='gradient-shader'></div>
 </div>
)};