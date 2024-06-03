import styles from './community.module.css';

export default function Community(){
return (
 <>
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Father Son Engagement</h2>
        <p>Fathers play a crucial role in the development of their sons, and their involvement in the community can have a profound impact. When fathers actively participate in community activities, they model the values of service, responsibility, and social engagement for their sons. This not only strengthens the father-son bond but also fosters a sense of belonging and purpose within the community. <br /><br /> Quality time spent together can enhance communication, build trust, and create lasting memories. Moreover, it provides opportunities for fathers to impart important life skills and values, guiding their sons toward becoming responsible, compassionate, and well-rounded individuals. Engaging in community service together can instill a sense of empathy and civic duty, ensuring that the next generation appreciates the importance of giving back and working towards the common good.</p>
    </div>
    <div className={styles.videoWrapper}>
   <img src="/img/basketball.png" alt="kids playing basketball" />
    </div>
 </div>

 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Fatherhood coaching</h2>
        <p>
Our Fatherhood Coaching Ministry is dedicated to empowering fathers with the skills, support, and resources needed to lead their families with love, strength, and faith. Through personalized coaching sessions, workshops, and community events, we guide fathers in nurturing their children's spiritual growth, emotional well-being, and overall development. Join us to build a stronger, more connected family and become the father God intended you to be.</p>
    </div>
    <div className={styles.videoWrapper}>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/chG7Hk3s9RI?si=sqfwTQaOYQVZFwUi&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
 </div>
 
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Workforce Development</h2>
        <p>
        Father's and Sons United Workforce Development is a ministry dedicated to strengthening the bond between fathers and sons while empowering them to make a positive impact on their community. Through collaborative projects focused on beautifying local neighborhoods, participants develop valuable skills, foster strong relationships, and take pride in contributing to a brighter, cleaner environment. This initiative not only enhances the community's appearance but also instills a sense of responsibility, unity, and accomplishment in both fathers and sons.</p>
    </div>
    <div className={styles.videoWrapper}>
   <img src="/img/workforce.png" alt="fathers with sons" />
    </div>
 </div>
 </>
)};