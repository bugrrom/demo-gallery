import React from 'react';

import styles from './Footer.module.css';
import Social from "./Social";


function Footer() {
    return (
        <div className={styles.footer} id='Contact'>
            <div className={styles.footerShadow}>
                <div className={styles.container}>
                    <span className={styles.name}>Bugakov Roman</span>
                    <div className={styles.container1}>
                        <Social/>
                    </div>
                    <span>2020 Все права защищены</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
