import React from 'react';

import styles from './Sections.module.css';

const sections = (props) => {
    return(
        <section className={styles.Sections}>
            {props.children}
        </section>
    )
};

export default sections;