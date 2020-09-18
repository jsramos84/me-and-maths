import React from 'react';

import styles from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    let style = null;
    let styleTwo = null;
    if(props.toggleStatus) {
        style = {
            borderColor: '#d3d3d3'
        };
        styleTwo = {
            backgroundColor: '#d3d3d3'
        }
    }
    return (
        <div onClick={props.toggle} style={style} className={styles.DrawerToggle}>
            <div style={styleTwo}></div>
            <div style={styleTwo}></div>
            <div style={styleTwo}></div>
        </div>
    )
};

export default drawerToggle;