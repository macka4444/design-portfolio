import React from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation} from "react-router-dom";
import logo from './logobg.svg';


const Navbar = (props) => {
    const location = useLocation().pathname;
    console.log(location)
    const pathnames = [
        ["/about","ABOUT"],
        ["/letterwork","LETTERWORK"],
        ["/makingimages","MAKING IMAGES"],
        ["/reflectivepractice","REFLECTIVE PRACTICE"],
        ["/elementsofdesign","ELEMENTS OF DESIGN"],
        ["/makemytype","MAKE MY TYPE"],
        ["/chanceandchoice","CHANCE AND CHOICE"],
    ]
    let i = 0;
    const navMenuItems = pathnames.map(
        (name) => {
            const style = (name[0] === location)
                ? styles.current_menu_item
                : styles.menu_item
            return (
                <li key={i++}>
                    <Link className={style} to={name[0]}>
                        {name[1]}
                    </Link>
                </li>
            )
        }
    )

    return (
        <nav>
            <Link to="/home">
                <img src={logo} className={styles.logo} alt="macka logo" />
            </Link>
            <ul className={styles.menu_list}>
                {navMenuItems}
            </ul>
        </nav>
    )
}

export default Navbar;


