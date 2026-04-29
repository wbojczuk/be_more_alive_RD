"use client"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function ParentingContent() {
  return (
    <section className={styles.section}>
        

       
          <div style={{ 
  fontFamily: 'Arial, sans-serif', 
  color: '#222',
  maxWidth: '1200px',
  margin: '0 auto'
}}>

  {/* Container */}
  <div style={{ 
    display: 'flex', 
    flexWrap: 'wrap'
  }}>

    {/* About Section */}
    <div style={{ 
      flex: '1 1 350px', 
      padding: '20px',
      backgroundColor: '#f5e9d8',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ fontSize: 'clamp(26px, 6vw, 34px)', marginBottom: '10px' }}>
        Parenting With A Purpose
      </h1> 
      <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '10px' }}>
        About Us
      </h1>

      <h3 style={{ marginBottom: '10px' }}>Parenting With A Purpose</h3>
      <p><strong>Wendy Brooks & Michael Hall</strong></p>
      <p style={{ fontSize: '14px' }}>
        Community Health Workers | Violence Prevention Specialists
      </p>

      <p style={{ marginTop: '10px', fontSize: '15px' }}>
        Wendy Brooks and Michael Hall are dedicated Community Health Workers based out of Asheville, North Carolina, committed to violence prevention and family healing. Drawing from their lived experiences, they bring authenticity, understanding, and compassion to their work with families impacted by incarceration.
      </p>

      <p style={{ fontSize: '15px' }}>
        Together, they offer both a mother’s and father’s perspective, creating a balanced and relatable approach to rebuilding parent-child relationships. Their work centers on overcoming family separation by placing the child’s emotional well-being at the heart of the healing process.
      </p>

      <p style={{ fontSize: '15px' }}>
        Through this program, they guide participants in self-reflection, addressing personal trauma, and developing the tools needed to grow as individuals and as parents. Their goal is to support lasting change, strengthen family bonds, and promote healing for both parent and child.
      </p>
    </div>

    {/* Contact Section */}
    <div style={{ 
      flex: '1 1 300px', 
      padding: '20px',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '10px' }}>
        Contact Us
      </h1>

      <p><strong>Wendy Brooks</strong></p>
      <p><strong>Michael Hall</strong></p>
      <p style={{ fontSize: '14px' }}>
        Community Health Workers – Violence Prevention Professional
      </p>

      <div style={{ marginTop: '20px', fontSize: '15px' }}>
        <p style={{ wordBreak: 'break-word' }}>Wbrooks@thesparcfoundation.org</p>
        <p>828-707-1587</p>
        <p style={{ wordBreak: 'break-word' }}>Mhall@thesparcfoundation.org</p>
      </div>
    </div>

    {/* Right Section */}
    <div style={{ 
      flex: '1 1 350px', 
      padding: '20px',
      backgroundColor: '#f5e9d8',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>
        Rebuilding Bonds. Restoring Hope. Strengthening Families.
      </p>

      <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', marginBottom: '10px' }}>
        Parenting With Purpose
      </h2>

      

      <p style={{ fontSize: '15px' }}>
        Supporting incarcerated parents in maintaining meaningful relationships with their children — because connection matters.
      </p>
    </div>

  </div>
</div>


        <img src="/img/cross.webp" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
