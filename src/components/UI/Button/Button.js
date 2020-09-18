import React from 'react';

import styles from './Button.module.css';

import { Link } from "react-router-dom";


const button = (props) => {
    return (
        <Link
            className={styles.Button}
            to={props.to}
            style={{
                backgroundColor: props.styleInfo.backgroundColor,
                color: props.styleInfo.color,
                padding: props.styleInfo.padding,
                marginTop: props.styleInfo.marginTop,
                display: props.styleInfo.display,
                marginRight: props.styleInfo.marginRight
            }}
            onClick={props.click}>
            {props.children}
        </Link>
    )
};

export default button;