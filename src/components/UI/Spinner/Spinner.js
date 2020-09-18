import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Spinner.module.css';

const spinner = (props) => {
    return(
        <CSSTransition
            in={props.in}
            timeout={400}
            classNames={{
                enter: styles['my-enter'],
                enterActive: styles['my-enter-active'],
                exit: styles['my-exit'],
                exitActive: styles['my-exit-active']
            }}
            unmountOnExit>
            <div className={styles.Spinner}>
                <div class={styles.ldsdualring}></div>
            </div>
        </CSSTransition>
    )
}

export default spinner;