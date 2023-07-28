"use client"
import styles from "../../styles/contact.module.css"
import Location from "@/app/location/page"
import { useState } from "react"

export const metadata = {
  title: 'About AHS Legal Services',
  description: 'Legal Services Undertaken Civil Court Cases Property Documents Verification and Advice Rentals and Business Agreements Drafting Muslim Law Cases Succession & Legal Heir Certificate Cases Family Court Divorce Maintenance & Guardianship Cases Writ Petitions and other Cases of High Court Police FIR & Chargesheet Quash Bail Consumer Forum Cases Service Law Recruitment/Selection Disputes Departmental Enquiry Industrial Disputes Workman/Compensation Admission Fee Documents Return disputes with Educational Institutions and any other Legal matter and issue of notices',
}
export default function Contact() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [sub, setSub] = useState("")
  const [desc, setDesc] = useState("")
  const [status, setStatus] = useState(false)
const [loading, setLoading] = useState(false)
  async function handleSubmit(e) {
    setLoading(true)
    const data = { name, email, phone, sub, desc }
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",

        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      const result = await response.text();
      setLoading(false)
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 4000)
      setName("")
      setEmail("")
      setPhone("")
      setDesc("")
      setSub("")

    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <div>

      <div className={styles.mainContact} data-aos="fade-up" >
        <p className={styles.contactHead}>CONTACT</p>
        <p className={styles.contactSubHead}>If you have any queries, feel free to message here or connect with me directly via phone call.</p>
        <div className={styles.contactBox} data-aos="fade-up">
          <div className={styles.contactCol1}>
            <p className={styles.contactHead2}>Contact Details</p>
            <p className={styles.contactDesc}>Fill the adjacent form.Describe your query briefly. You will reveive a reply within 24 hours.</p>
            <div className={styles.contactDetails}>
              <div className={styles.contact1}>  <img src="images/phoneIcon.png" className={styles.icon1}></img><p>+91 9246178292</p></div>
              <div className={styles.contact1}>  <img src="images/mailIcon.png" className={styles.icon1}></img><p>shaikhah.advocate@gmail.com</p></div>
              <div className={styles.contact1}>  <img src="images/locationIcon.png" className={styles.icon1}></img><p>16-2-741/B/50/A/12, Ground Floor,
                Asmangadh, Besides st. Joseph
                School, Malakpet,
                Hyderabad,
                500036 (TS).</p></div>

            </div>

          </div>
          <form onSubmit={handleSubmit} className={styles.contactCol2}>
            <div className={styles.subCol2}>
         
              <input type="text" placeholder="Your Name" name="user_name" onChange={e => setName(e.target.value)} value={name}></input>

              <input type="email" placeholder="Email" name="user_email" onChange={e => setEmail(e.target.value)} value={email}></input>
              <input type="text" placeholder="Phone No" name="user_phone" onChange={e => setPhone(e.target.value)} value={phone}></input>
            </div>
            <div className={styles.subdiv2}>  <input className={styles.ContactSubject} type="text" placeholder="Subject" name="subject" onChange={e => setSub(e.target.value)} value={sub}></input>
              <textarea className={styles.textarea} placeholder="Describe your query in short here..." name="message" onChange={e => setDesc(e.target.value)} value={desc}></textarea></div>
            <div className={styles.btnDiv}>
              {!status && !loading && <button type="submit" value="send" className={styles.SubmitBtn}>Send</button>}
              {loading && <button type="submit" value="send" className={styles.SubmitBtn}>sending...</button>}
              {status && <button type="submit" value="send" style={{ backgroundColor: "#00B894", fontSize: "16px" }} className={styles.SubmitBtn}>Sent Successfully!</button>}
            </div>
          </form>

        </div>

      </div>
      <div data-aos="fade-up" >
        <Location />
      </div>
    </div>
  )
}