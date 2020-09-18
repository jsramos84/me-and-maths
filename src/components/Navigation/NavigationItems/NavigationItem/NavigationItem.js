import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const navigationItem = (props) => {

    let styleClasses = [styles.NavigationItem]
    if(props.location.pathname === props.content) {
        styleClasses.push(styles.Active);
    }
    return(
        <li className={styleClasses.join(' ')}>
            <Link to={props.content} onClick={props.closeDrawer}>
                {props.children}
            </Link>
        </li>
    )
};

export default withRouter(navigationItem);