import Image from 'next/image'
import styles from '../styles/navBar.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';


function NavBar() {
  const router = useRouter();
  
  return (
    <div>
      <nav className={styles.Navwrap}>
        <div className={styles.Nav_logowrap}>
          <div className={styles.Nav_logoimg}>
            <Image src="/../public/navlogo.png" alt="lOGO" width={38} height={38} />
          </div>
          <div className={styles.Nav_logotext}>
            <h6>ALEXANDER ASHIMEDUA</h6>
            <p>SOFTWARE ENGINEER</p>
          </div>
        </div>
        <ul className={styles.Navlinks}>
          <Link href="/#About" as="/#About">
            <li className={router.asPath === '/#About' ? `${styles.activenavlink}` : ''}>About</li>
          </Link>
          <Link href="/#Services" as="/#Services">
            <li className={router.asPath === '/#Services' ? `${styles.activenavlink}` : ''}>Services</li>
          </Link>
          <Link href="/#Projects" as="/#Projects">
            <li className={router.asPath === '/#Projects' ? `${styles.activenavlink}` : ''}>Projects</li>
          </Link>
          <Link href="/#Testimonials" as="/#Testimonials">
            <li className={router.asPath === '/#Testimonials' ? `${styles.activenavlink}` : ''}>Testimonials</li>
          </Link>
          <Link href="/#Contact" as="/#Contact">
            <li className={router.asPath === '/#Contact' ? `${styles.activenavlink}` : ''}>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
