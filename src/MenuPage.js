import React from 'react';
import logo from './macka.png';
import styles from './MenuPage.module.css';
console.log(styles)



const Intro = () => (
    <div className={styles.container}>
        {/* <img src={logo} className="intro-macka-logo" alt="macka logo" /> */}
    </div>
)

function Menupage() {
    return (
        <Intro/>
        // <MenuPage />

    );
}

export default Menupage;
