import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation} from "react-router-dom";
import logo from './logobg.svg';
import close_icon from './photos/close.svg';
import menu_icon from './photos/menu.svg';

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

    const Nav = (props) => (
        <nav className={styles.menu_container}>
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
        const menu = (state) 
            ? (
                <div className={styles.menu_container_small_screen}>
                    <button className={styles.close_button} onClick={()=>setState(false)}>
                        <img src={close_icon} className={styles.icon} alt="close navbar icon"/>
                    </button>
                    <nav >
                        <Link to="/home">
                            <img src={logo} className={styles.logo} alt="macka logo" />
                        </Link>
                        <ul className={styles.menu_list}>
                            {navMenuItems}
                        </ul>
                    </nav>
                </div>
            )
            : (
                <div>
                    <button className={styles.menu_button} onClick={() => setState(true)}>
                        <img src={menu_icon} className={styles.icon} alt="open navbar icon" />
                    </button>
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


