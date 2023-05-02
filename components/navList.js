import Link from "next/link"
import { useRouter } from 'next/router';
import styles from '../styles/navBar.module.css';
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 31%;
    color: #333;
    font-size: 17px;
    align-items:  baseline;
    padding-top: 16px;
    
    li a{
        list-style: none;
        text-decoration: none;
    }
@media screen and (max-width:1024px){
     width: 50%;
}
@media screen and (max-width:760px){
    position: fixed;
    left: -1px;
    height: 108vh;
    top: 0vh;
    background:  #440f88;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 64%;
    z-index: 16;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.5s ease-in-out;
`;

const Navlist =({open})=>{
    const router = useRouter();
    return(
        <>
         <Ul open={open} className={styles.Navlinks}>
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
          </Ul>
        </>
    )
}
export default Navlist