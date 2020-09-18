import React from 'react';

import styles from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem closeDrawer={props.closeDrawer} content={props.content.inicio}>Início</NavigationItem>
            <NavigationItem closeDrawer={props.closeDrawer} content={props.content.explicacoes}>Explicações</NavigationItem>
            <NavigationItem closeDrawer={props.closeDrawer} content={props.content.precario}>Preçário</NavigationItem>
            <NavigationItem closeDrawer={props.closeDrawer} content={props.content.quemSomos}>Quem Somos</NavigationItem>
            <NavigationItem closeDrawer={props.closeDrawer} content={props.content.contactos}>Contactos</NavigationItem>
        </ul>
    )
};

export default navigationItems;