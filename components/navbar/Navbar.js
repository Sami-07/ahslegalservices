import styles from "./navbar.module.css"

import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    // const location = useLocation();
    // const handleClick = () => {
    //     window.scrollTo(0, 0);
    // };
    return (
        <div className={`${styles.myNav} ${styles.nav}`}>

            <Image className={styles.logo} src="/images/whiteLogo.png" alt="my logo" width={100} height={100} />
            <div className={styles.ul}>
                <Link href="/"  >
                    Home
                </Link>
                <Link href="/about" >
                    About
                </Link>
                <Link href="/services"  >
                    Services
                </Link>
                <Link href="/contact" >
                    Contact
                </Link>
            </div>

        </div>
    )
}
// onClick={handleClick}
