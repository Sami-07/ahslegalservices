import styles from "../styles/home.module.css"
import Image from "next/image"
import Contact from "../app/contact/page"
import About from "../app/about/page"
import Services from "../app/services/page"
// import AOS from "aos"
// import "aos/dist/aos.css";
import Link from "next/link"

export const metadata = {
  title: 'AHS Legal Services',
  description: 'Legal Services Undertaken Civil Court Cases Property Documents Verification and Advice Rentals and Business Agreements Drafting Muslim Law Cases Succession & Legal Heir Certificate Cases Family Court Divorce Maintenance & Guardianship Cases Writ Petitions and other Cases of High Court Police FIR & Chargesheet Quash Bail Consumer Forum Cases Service Law Recruitment/Selection Disputes Departmental Enquiry Industrial Disputes Workman/Compensation Admission Fee Documents Return disputes with Educational Institutions and any other Legal matter and issue of notices',
}
export default function Home() {

  return (
    <div>
      <div className={styles.mainHome} data-aos="fade-up" >
        <div className={styles.homeText}>
          <p className={styles.homeHead}>AHS Legal Services</p>

          <Link href="/contact">
            <button className={styles.btn} data-aos="fade-up">CONTACT DETAILS</button>
          </Link>
          <Link href="/services">
            <button className={styles.btn} data-aos="fade-up">SERVICES OFFERED</button>
          </Link>
          <Link href="/location">
            <button className={styles.btn} data-aos="fade-up">OFFICE LOCATION</button>
          </Link>
        </div>
        <div className={styles.imgDiv}>
          <Image src="/images/newHammer.png" width={1000} height={1000} className={styles.hammerImg} alt="law image" />

        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </div>
  )
}