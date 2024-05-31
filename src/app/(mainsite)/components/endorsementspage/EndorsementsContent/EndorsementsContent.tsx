import styles from './endorsementscontent.module.css';

export default function EndorsementsContent(){
return (
 <div className={styles.endorsementsContent}>
    <div className={styles.websiteWrapper}>
        <div className={styles.website}>
            <img src="/img/website1.webp" alt="image of external site" />
            <div className={`center ${styles.linkWrapper}`}>
                <a className='main-link' target='_blank' href='https://theurbannews.com/lifestyles/2024/a-fathers-story'>Visit Site</a>
            </div>
        </div>
        <div className={styles.website}>
            <img src="/img/website2.webp" alt="image of external site" />
            <div className={`center ${styles.linkWrapper}`}>
                <a className='main-link' target='_blank' href='https://wlos.com/news/local/addressing-the-gun-violence-epidemic-nonprofit-leaders-michael-hallefforts-amid-troubling-arrests-my-daddy-taught-me-that-generation2generation-rontae-harper-tristin-maewether-chase-van-leeuwen-marckia-jones'>Visit Site</a>
            </div>
        </div>
    </div>


    <div className={styles.endorsement}>
        <h2 className={styles.author}><strong>Jay Wilson</strong> <br />
Licensed Clinical Social Worker</h2>
        <p className={styles.content}>In the time that I have known Mike Hall, I have witnessed firsthand his dedication to the betterment of society. Mike is compassionate and has profoundly impacted those he has come in contact with through his fatherhood mentorship program. His dedication to his cause of creating holistic healing in all communities by disciplining parents to be more engaged and responsible is unwavering. Mike has an invaluable ability to connect with people from all walks of life, including those who society has deemed hopeless. I am not overstating when I say that our local community is more supportive, thanks to Mike's dedication.

<br /><br />
One of Mike's most admirable qualities is his strong faith, which is the foundation of his character. His faith is the guiding principle in his life that consistently guides his actions and decisions. Mike is kind, humble, and patient, and he consistently demonstrates these values in his interactions with others. In addition to his faith, Mike places a high value on friendship. He has shown that he believes in the power of genuine, supportive relationships and works hard to cultivate these bonds, which has made him a beloved figure among his peers and those he mentors. 
</p>
    </div>

    <div className={styles.endorsement}>
        <h2 className={styles.author}><strong>Mrs. Kristie L. Sluder</strong> <br />
        BSW, MSW, LCAS, CCHP</h2>
        <p className={styles.content}>To whom it may concern 
Regarding Michael J. Hall <br /><br />
Dear Sir or Madam,
This note is to advise you that Mr. Michael Hall is a sure testament to redemption and service that flows from on attitude of gratitude..
Mr. Hall exemplifies the transformation that is possible only through the Grace of God. He gives back tirelessly to help prevent the same socioeconomic issues that arise out of poverty, neglect and the absence of fathers in our communities which played a role in his previous lifestyle.
I personally recruited Mr. Hall to work as a volunteer in the local county jail which daily houses 350 – 400 inmates. Ninety percent of whom hail come from fatherless homes. 
He is faithful to the cause and counsel the inmates weekly in group counseling  sessions. 
He is an asset to our community. He has flipped the script. He deserves our support and respect. <br /><br />
I am available to discuss this reference in person as needed

</p>
    </div>

    <div className={styles.endorsement}>
        <h2 className={styles.author}><strong>George Knapp</strong></h2>
        <p className={styles.content}>In the midst of a chaotic time and busy people, Pastor Mike Hall has been such an inspiration in his willingness to lead in his community.  We have had the privilege of participating in his ministry by giving financially for the cause of Fatherhood in his community.  Our country is experiencing a pandemic of Fatherless families and as a result we all suffer. Brother Mike has helped draw attention to the need to strengthen the family structure through strong fatherly leadership and divine calling. It is a clear fact as we lose the family identity, we experience all sorts of societal dysfunction and brokenness. <br /><br />
     The work that is being done by Pastor Hall is needed everywhere. It is our prayer that his vision and appreciation for fatherhood will spread all across this country, along with the calling of God to be biblical fathers and family leaders.  This work is an essential work and is very impactful to our society.  We trust this ministry is going to grow because of the heart and motivation behind it - God’s glory!!
\
</p>
    </div>
 </div>

)};