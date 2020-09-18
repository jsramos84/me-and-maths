import React from 'react';

import styles from './Explicacoes.module.css';

import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const explicacoes = (props) => {
    let content = [];
    for(let key in props.content.content) {
        content.push(props.content.content[key])
    };
    
    let sectionContent = content.map(cur => {
        return(
            <Auxiliar key={cur.title}>
                <h3>{cur.title}</h3>
                <p>{cur.text}</p>
            </Auxiliar>
        )
    })

    return(
        <Auxiliar>
            <div className={styles.ImageContainer}>
                <img src={props.content.image} alt='explicaões' />
            </div>
            <div className={styles.SectionContent}>
                {sectionContent}
            </div>
        </Auxiliar>
    )
};

export default explicacoes;