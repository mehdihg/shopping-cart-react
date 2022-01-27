import React from 'react';
import logo from '../shared/logo.svg'
import styles from './Footer.module.css'



import { FaWhatsappSquare , FaInstagramSquare , FaDribbbleSquare} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footercontent}> 
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <div className={styles.footersocial}>
                <FaWhatsappSquare />
                <FaInstagramSquare />
                <FaDribbbleSquare />
            </div>
            <div className={styles.footertext}>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;