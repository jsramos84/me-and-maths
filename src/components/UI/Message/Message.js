import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Message.module.css';
import Button from '../Button/Button';

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
            <div className={styles.Message} onClick={props.close}>
                <div className={styles.MessageContainer}>
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                    <Button
                        styleInfo= {{backgroundColor: '#CC0000', color: 'white', padding: '5px'}}
                        to='/contactos'
                    >
                        Fechar
                    </Button>
                </div>
            </div>
        </CSSTransition>
    )
}

export default spinner;