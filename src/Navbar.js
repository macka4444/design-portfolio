import React from 'react';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import logo from './macka.png';


const Navbar = (props) => (
    <nav>
        <Link to="/home">
            <img src={logo} className={styles.logo} alt="macka logo" />
        </Link>
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
    </nav>
)

export default Navbar;


