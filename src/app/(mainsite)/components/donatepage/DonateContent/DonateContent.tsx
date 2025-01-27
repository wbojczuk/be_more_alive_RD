import styles from './donatecontent.module.css';

export default function DonateContent(){
return (
 <div className={styles.donateContent}>
    <div className="center">
    <p><strong>Donation Request for the Faith in Family Foundation Event</strong>
<br /><br />
Dear Supporters and Friends,
<br /><br />
We are thrilled to announce our upcoming Faith in Family Foundation Event, an inspiring gathering focused on uplifting families, building stronger communities, and empowering individuals through faith, hope, and actionable support. This event will feature workshops, guest speakers, and activities designed to create lasting impact.
<br /><br />
To make this event successful, we need your support! Every contribution goes directly towards:
<br /><br />
Supporting community programs for families
<br />
Providing resources for fathers and sons to grow and bond
<br />
Workforce development initiatives to empower returning citizens
<br />
Expanding mental health and enrichment programs for men

<br /><br />
Your generous donations will help us continue making a difference.
<br /><br />
You can contribute easily via:
<br /><br />
<div className={`${styles.buttonWrapper}`}>
    <a target='_blank' href="paypal.me/MichaelHall96" className='main-link'>PayPal</a>
    <a target='_blank' href="https://www.venmo.com/u/BeMoreAliveMinistry2024" className='main-link'>Venmo</a>
</div>
<br />
<br />


Thank you for believing in the power of faith, family, and community. Together, we can change lives and inspire generations to come. <br /><br />

With gratitude,<br />
Michael Hall <br />
Be-More Alive Ministries | Operation Gateway <br />
For questions or more information, feel free to reach out: <br />
📧 mike@operationgateway.org <br />
📧 BeMoreAlive828@gmail.com <br />
📞 828-216-9077 <br />
<br /><br />
Your support changes lives.</p>
    </div>
 </div>
)};