// "use client"
import styles from "../../styles/services.module.css"
import Image from "next/image"
import * as fs from "fs"
export const metadata = {
  title: 'Services at AHS Legal Services',
  description: 'Legal Services Undertaken Civil Court Cases Property Documents Verification and Advice Rentals and Business Agreements Drafting Muslim Law Cases Succession & Legal Heir Certificate Cases Family Court Divorce Maintenance & Guardianship Cases Writ Petitions and other Cases of High Court Police FIR & Chargesheet Quash Bail Consumer Forum Cases Service Law Recruitment/Selection Disputes Departmental Enquiry Industrial Disputes Workman/Compensation Admission Fee Documents Return disputes with Educational Institutions and any other Legal matter and issue of notices',
}
export default async function Services() {
  const allServices = await getServices();
  const parsedServices = await JSON.parse(allServices)
  return (
    <div data-aos="fade-up" className={styles.ServicesMainHome}>
      <p className={styles.servicesHead}>SERVICES OFFERED</p>
      <div className={styles.allCards}>
        {parsedServices.map((service) => {
          let imagePath = `/images/${service.image}.jpg`;
          return (
            <div className={styles.card} data-aos="fade-up" key={service.image}>
              <div className={styles.serviceNameHead}>
                <h1 className={styles.serviceName}>{service.title}</h1>
              </div>
              <div className={styles.AllRightContent}>
                {imagePath && <Image src={imagePath} className={styles.eachImg} width={100} height={100} alt="service related image" />}
                <div className={styles.rightContent}>
                  <p className={styles.desc}>{service.content}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export async function getServices() {
  try {
    const data = await fs.promises.readFile(`servicesdata/allservices.json`, "utf-8")
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}