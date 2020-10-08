import React from 'react';
import logo from './logobg.svg';
import styles from './MenuPage.module.css';
import { Link } from "react-router-dom";

function MenuPage() {
    return (
        <div className={styles.container_no_animation}>
            <img src={logo} className={styles.macka_logo} alt="macka logo" />
            <ul>
                <li>
                    <Link className={styles.menu_item} to="/about">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link className={styles.menu_item} to="/letterwork">
                        LETTERWORK
                    </Link>
                </li>
                <li>
                    <Link className={styles.menu_item} to="/makingimages">
                        MAKING IMAGES
                    </Link>
                </li>
                <li>
                    <Link className={styles.menu_item} to="reflectivepractice">
                        REFLECTIVE PRACTICE
                    </Link>
                </li>
                <li>
                    <Link className={styles.menu_item} to="elementsofdesign">
                        ELEMENTS OF DESIGN
                    </Link>
                </li>
                <li>
                    <Link className={styles.menu_item} to="makemytype">
                        MAKE MY TYPE
                    </Link>
                </li>
                <li>
                    <Link className={styles.menu_item} to="chanceandchoice">
                        CHANCE AND CHOICE
                    </Link>
                </li>
            </ul>
        </div>


    );
}

export default MenuPage;
