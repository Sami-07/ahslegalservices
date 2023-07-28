import styles from "../../styles/about.module.css"

import Image from 'next/image'

// import { useEffect } from "react"
// import AOS from "aos"
// import "aos/dist/aos.css";
export const metadata = {
    title: 'About AHS Legal Services',
    description: 'Legal Services Undertaken Civil Court Cases Property Documents Verification and Advice Rentals and Business Agreements Drafting Muslim Law Cases Succession & Legal Heir Certificate Cases Family Court Divorce Maintenance & Guardianship Cases Writ Petitions and other Cases of High Court Police FIR & Chargesheet Quash Bail Consumer Forum Cases Service Law Recruitment/Selection Disputes Departmental Enquiry Industrial Disputes Workman/Compensation Admission Fee Documents Return disputes with Educational Institutions and any other Legal matter and issue of notices',
  }

export default function About() {
    // useEffect(() => {
    //     AOS.init({ duration: 2000 })
    // }, [])
    return (

        <div data-aos="fade-up"
         className={styles.aboutMainPart}>
            <div className={styles.descImgDiv}>
                <div className={styles.leftPart}>
                    <h2 className={styles.aboutHead}>ABOUT</h2>
                    <p className={styles.aboutDesc}>We have 15+ Years of experience in Legal Business. We undertake : Civil Court Cases, Property Documents Verification and Advice, Rentals and Business Agreements Drafting, Muslim Law Cases, Succession & Legal Heir Certificate Cases, Family Court, Divorce, Maintenance & Guardianship Cases, Writ Petitions and other Cases of High Court, Police FIR & Chargesheet Quash, Bail, Consumer Forum Cases, Service Law, Recruitment/Selection Disputes, Departmental Enquiry, Industrial Disputes, Workman/Compensation, Admission, Fee, Documents Return disputes with Educational Institutions, and any other Legal matter and issue of notices, etc.</p>
                </div>
                <div className={styles.profileImgDiv}>
                    <Image src="/images/aboutProfile.png" className={styles.profileImg} data-aos="fade-up" width={100} height={100} alt="my image"/>
                </div>

            </div>
            <div className={styles.qualificationsDiv}>
                <h2 className={styles.aboutHead}>QUALIFICATIONS</h2>
                <h2 className={styles.qua}>A.M. Ae.S.I, M.I.E.C.Engr(I), LL.B, LL.M </h2>
            </div>
            <div className={styles.expertise}>
                <h2 className={styles.aboutHead}>
                    EXPERTISE
                </h2>
                <ul>
                    <li className={styles.eachLi}> Civil Court and Property Disputes</li>
                    <li className={styles.eachLi}>Drafting of Rental , Property and Business Agreements</li>
                    <li className={
                        styles.eachLi}>Muslim Personal Law and Succession cases.</li>
                    <li className={styles.eachLi}>Claiming Legal Heir Certificate.</li>
                    <li className={styles.eachLi}> Family Law, Divorce, Maintenance and Guardianship Cases</li>
                    <li className={styles.eachLi}>Writ Petitions, Appeals and Revision in the High Court</li>
                    <li className={styles.eachLi}> Industrial Disputes involving workman and management.</li>
                    <li className={styles.eachLi}> Problems relating to Recruitment, Selection And
                        Appointment in the Government Departments and Public
                        Undertakings.</li>
                    <li className={styles.eachLi}>Disputes in the matter of Admission, Fees and Documents Retention
                        in the Private Educational Institutions
                    </li>
                </ul>

            </div>


        </div>
    )
}