import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './QuemSomos.module.css';

import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const quemSomos = (props) => {
    let content = [];
    for(let key in props.content.content.one.items) {
        content.push(props.content.content.one.items[key])
    };

    let contentTwo = [];
    for(let key in props.content.content.two.items) {
        contentTwo.push(props.content.content.two.items[key])
    };

    let list = content.map(cur => {
        return(
            <li key={cur}>{cur}</li>
        )
    })

    let listTwo = contentTwo.map(cur => {
        return(
            <li key={cur}>{cur}</li>
        )
    })

    return(
        <Auxiliar>
            <div className={styles.Container}>
                <div className={styles.ContainerOne}>
                    <div className={styles.ImageContainer}>
                        <img src={props.content.image} alt='explicaões' />
                    </div>
                    <div className={styles.SectionContent}>
                        <h3>{props.content.content.one.title}
                            <a href='https://www.linkedin.com/in/inespalmasantos/' target='blank'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} style={{marginLeft: '5px'}}/>
                            </a>
                        </h3>
                        {/*<p>{props.content.content.one.text}</p>*/}
                        <ul>
                            {list}
                        </ul>
                        <p>"If you can dream it, you can do it." - Walt Disney</p>
                    </div>
                </div>
                <div className={styles.ContainerOne}>
                    <div className={styles.ImageContainer}>
                        <img src={props.content.imageTwo} alt='explicaões' />
                    </div>
                    <div className={styles.SectionContent}>
                        <h3>{props.content.content.two.title}
                            <a href='https://www.linkedin.com/in/joaosampayoramos' target='blank'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} style={{marginLeft: '5px'}}/>
                            </a>
                        </h3>
                        {/*<p>{props.content.content.two.text}</p>*/}
                        <ul>
                            {listTwo}
                        </ul>
                        <p>"A caminhada de mil léguas começa sempre com o primeiro passo"</p>
                    </div>
                </div>
            </div>
        </Auxiliar>
    )
};

export default quemSomos;