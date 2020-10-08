import React from 'react';
import styles from './Template.module.css';
import Navbar from './Navbar.js'


const FilledTemplate = (props) => {
    let { content } = props
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <div className={styles.gallery}>
                </div>
                <div className={styles.text}>
                    <h1>{content.title}</h1>
                    {content.description}
                </div>
            </div>
        </div>
    )
}

export default FilledTemplate;