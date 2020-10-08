import React, { useState } from 'react';
import styles from './Template.module.css';
import Navbar from './Navbar.js'


const FilledTemplate = (props) => {
    let { content } = props
    let ref = React.createRef();
    const [pageNumber, setPageNumber] = useState(1);


    //photos
    let i = 0;
    const photo_array = content.photos.map(
        (photo) => (
            <div className={styles.photo_holder} key={i++}>
                <img src={photo[0]} className={styles.photo} alt={photo[1]} />
            </div>
        )
            
    )
    

    const scrollHandler = () => (
        setPageNumber(Math.ceil(ref.current.scrollTop / window.innerHeight + .5))
    )

    // pagination dots
    const dot_quantity = photo_array.length
    const dots = []
    for (let j = 1; j <= dot_quantity; j++){
        (pageNumber === j) 
            ? dots.push(<div className={styles.full_dot}/>)
            : dots.push(<div className={styles.empty_dot}/>)
    }



    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <div className={styles.gallery} onScroll={scrollHandler} ref={ref}>
                    {photo_array}
                    <div className={styles.dots_holder}>
                        {dots}
                    </div>
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