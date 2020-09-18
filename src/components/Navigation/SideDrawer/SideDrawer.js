import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <CSSTransition
            in={props.showDrawer}
            unmountOnExit
            timeout={400}
            classNames={{
                enter: styles['SideDrawer-enter'],
                enterActive: styles['SideDrawer-enter-active'],
                enterDone: styles['SideDrawer-enter-done'],
                exit: styles['SideDrawer-exit'],
                exitActive: styles['SideDrawer-exit-active'],
               }}
        >
            <div className={styles.SideDrawer}>
                {props.children}
            </div>
        </CSSTransition>
    )
};

export default sideDrawer;