import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation} from "react-router-dom";
import logo from './logobg.svg';


const Navbar = (props) => {
    const location = useLocation().pathname;

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

    const Nav = () => (
        <nav className={styles.fullscreen}>
            <Link to="/home">
                <img src={logo} className={styles.logo} alt="macka logo" />
            </Link>
            <ul className={styles.menu_list}>
                {navMenuItems}
            </ul>
        </nav>
    )
    
    const Togglable = () => {
        const [state, setState] = useState(false);
        const menu = (false) 
            ? (
                <div>
                    {/* cross button */}
                    <Nav />
                </div>
            )
            : (
                <div>
                    {/* hamburger menu button */}
                </div>
            )

            
        return menu
    }

    return (
        <div>
            <Nav/>
            <Togglable/>
        </div>
    )
}

export default Navbar;


