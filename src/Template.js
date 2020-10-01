import React from 'react';
import styles from './Template.module.css';


const FilledTemplate = (props) => {
    let { content } = props
    return (
        <div className={styles.container}>
            <nav>

            </nav>
            <div className={styles.content}>
                <div className={styles.gallery}>
                </div>
                <div className={styles.text}>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FilledTemplate;