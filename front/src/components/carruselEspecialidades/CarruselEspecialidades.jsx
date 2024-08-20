import React, { useEffect, useRef, useState } from 'react'
import { imgData } from './CarruselImg.js';
import styles from "./CarruselEspecialidades.module.css"
export default function CarruselEspecialidades(props) {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex])

    const scrollToImage = (direction) => { 
        if(direction === 'prev'){
            setCurrentIndex(curr => {
                const isFirsSlide = currentIndex === 0;
                return isFirsSlide ? 0 : curr -1
            })
        }else{
            const isLastSlide = currentIndex === imgData.length -1;
            if( !isLastSlide ){
                setCurrentIndex(curr => curr + 1);
            }
        }
     }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    } 

    return (
        <>
            <div className={styles.container}>
                <div className={styles.sliderContainer}>
                    <div className={styles.leftArrow} onClick={() => scrollToImage('prev')}>&#10094;</div>
                    <div className={styles.rightArrow} onClick={() => scrollToImage('next')}>&#10095;</div>
                    <div className={styles.containerImg}>
                        <ul ref = {listRef}>
                            {
                                imgData.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.img} width={1270} height={500}/>
                                    </li>
                                })
                            }

                        </ul>
                        

                    </div>
                    <div className={styles.dotsContainer}>
                        {
                            imgData.map((_, idx) => (
                                <div key={idx} className={styles.dotContainerItem}
                                onClick={() => goToSlide(idx)} >
                                    &#9865;
                                </div>   
                            ))
                        }
                    </div>
                    

                </div>
                
            </div>  
        </>
    )
}
