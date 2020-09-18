import React from 'react';

import styles from './Modal.module.css';

const modal = (props) => {
    return (
        <div className={styles.Modal} onClick={props.closeModal}>

        </div>
    )
}

export default modal;