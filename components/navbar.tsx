import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/navBar.module.css';
import Link from 'next/link';
import { useScrollDirection } from "./useScrollDirection";
import logo from '../public/navlogo.png'
import Navlist from './navList.js';
import Burger from './burger';


function NavBar() {
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
              <Image src={logo} alt="lOGO" width={38} height={38} />
            </div>
            <div className={styles.Nav_logotext}>
              <h6>ALEXANDER ASHIMEDUA</h6>
              <p>SOFTWARE ENGINEER</p>
            </div>
          </div>
         <Burger/>
        </nav>
      </header>
    </div>
  );
}
export default NavBar;
