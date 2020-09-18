import React from 'react';
import { Fade } from 'react-slideshow-image';

import styles from './HomePage.module.css';
import './HomePage.css';

import Button from '../UI/Button/Button';

const homePage = (props) => {
    let fadeImages = [];
    
    for(let key in props.content.slides) {
        fadeImages.push(props.content.slides[key])
    };

    const fadeProperties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators: false,
        arrows: false,
        onChange: (oldIndex, newIndex) => {
          
        }
      }
    
    let imageCarousel = [];

    imageCarousel = fadeImages.map((cur, index) => {
        let title;
        if(index === 0) {
            title = <h1 key={cur.title}>{cur.title}</h1>
        } else {
            title = <h1 key={cur.title}>{cur.title}</h1>
        }
        
        let buttons = [];

        for(let key in props.content.buttons) {
            buttons.push(props.content.buttons[key])
        };

        let buttonsHtml = buttons.map(cur => {
            return (
                <Button
                    key={cur.to}
                    to={cur.to}
                    styleInfo={cur.styleInfo}>
                    {cur.title}
                </Button>
            )
        })

        return (
            <div className="each-fade" key={cur.title}>
                <div
                    className="image-container"
                    style={{
                        backgroundImage: `url(${cur.image})`,
                        backgroundSize: 'cover'}}>
                    <div className={styles.Caption}>
                        {title}
                        <div className={styles.ButtonContainer}>
                            {buttonsHtml}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="slide-container">
            <Fade {...fadeProperties}>
                {imageCarousel}
            </Fade>
        </div>
    )
};

export default homePage;