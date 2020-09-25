import React from 'react';
import logo from './macka.png';
import styles from './MenuPage.module.css';


function MenuPage() {
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.macka_logo} alt="macka logo" />
            <ul>
                <li>ABOUT</li>
                <li>LETTERWORK</li>
                <li>MAKING IMAGES</li>
                <li>REFLECTIVE PRACTICE</li>
                <li>ELEMENTS OF DESIGN</li>
                <li>MAKE MY TYPE</li>
                <li>CHANCE AND CHOICE</li>
            </ul>
            
        </div>


    );
}

export default MenuPage;
