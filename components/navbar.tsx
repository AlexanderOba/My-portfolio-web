import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/navBar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useScrollDirection } from "./useScrollDirection";


function NavBar() {
  const router = useRouter();
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  const scrollY = useScrollDirection();

  useEffect(() => {

    function handleScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > scrollPosition) {
        setScrollDirection('down');
        setShowMenu(false);
      } else if (currentPosition < scrollPosition) {
        setScrollDirection('up');
        setShowMenu(true);
      }
      setScrollPosition(currentPosition);
    }
      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div>
      <header className={`navigation-menu ${showMenu ? '' : styles.hidden} ${scrollPosition === 0 ? styles.topPageNav : ''} ${scrollPosition > 600 ? styles.changeNavBackground : ''}`}>
        <nav >
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
      </header>
    </div>
  );
}
export default NavBar;
